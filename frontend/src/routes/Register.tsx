import React, {useState, useEffect} from 'react';
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';

import Cat from '../images/Cat.svg';

const Register = () => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [firstpassword, firstPassword] = useState('')
    const [confpassword, confPassword] = useState('')
    const [token, setToken,removeToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(false)
    let navigate = useNavigate()

    let userID = 0;
    let department = "Employee"
    let is_mentor = false
    let pronouns = "Unknown"
    let title = "XX."

    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const RegisterBtn = async (e: React.FormEvent<HTMLInputElement>) => {

        e.preventDefault()

        var divsToShow = document.getElementsByClassName('error__message') as HTMLCollectionOf<HTMLElement>
        for(var i = 0; i < divsToShow.length; i++){
            divsToShow[i].style.display = "none"; 
        }

        var conditions = 0

        if (!first_name || !last_name || !email || !firstpassword || !confpassword) {
            conditions += 1
            console.log("PLEASE FILL IN ALL DETAILS")
            divsToShow[0].style.display = "block"; 
        }
        if (!email.match(emailformat)) {
            conditions += 1
            console.log("Email invalid")
            divsToShow[1].style.display = "block"; 
        }
        if (firstpassword.length < 8) {
            conditions += 1
            console.log("Password must be at least 8 characters long")
            divsToShow[2].style.display = "block"; 
        }
        if (firstpassword.search(/[a-zA-Z]/) == -1) {
            conditions += 1
            console.log("Password must contain at least one letter")
            divsToShow[3].style.display = "block"; 
        }
        if (firstpassword.search(/\d/) == -1) {
            conditions += 1
            console.log("Password must contain at least one number")
            divsToShow[4].style.display = "block"; 
        }
        if (firstpassword != confpassword) {
            conditions += 1
            console.log("Passwords must match")
            divsToShow[5].style.display = "block"; 
        }
        if (conditions == 0) {
            const username = email.split("@")[0]
            const password = confpassword
            APIService.RegisterUser({first_name, last_name, email, username, password})
            .then( resp => {
                userID = resp.id
                APIService.RegisterUserDetails({userID, department, is_mentor, pronouns, title})
                .then( ()=> {
                    navigate('/')
                })
                .catch(error2 => console.log(error2))
            })
            .catch( error => console.log(error))
        }
    }

    return (
        <div className="frontpage">
            <div className="frontpage__block">
                <div className="frontpage__title">
                    Want to get more work on top of your job?
                </div>
                <div className="frontpage__subtitle">
                    Use our software.
                </div>
                <img src={Cat} className="frontpage__img"/>
                <div className="register__form__area">
                    <div className="register__form__title">
                        <hr/>
                        Register
                        <hr/>
                    </div>
                    <form className="register__form">
                        <div className='error__message' id='err0'>Please fill in all fields!</div>
                        <div className="register__names">
                            <label>
                                <input type="text" name="fname" placeholder="First Name"
                                value = {first_name} onChange = {e => setFirstName(e.target.value)}/><br/>
                            </label>
                            <label>
                                <input type="text" name="lname" placeholder="Last Name"
                                value = {last_name} onChange = {e => setLastName(e.target.value)}/><br/>
                            </label>
                        </div>
                        <label>
                            <input type="text" name="email" placeholder="Email Address"
                            value = {email} onChange = {e => setEmail(e.target.value)}/><br/>
                        </label>
                        <div className='error__message' id='err1'>Email is invalid.</div>
                        <label>
                            <input type="password" name="password" placeholder="Password"
                            value = {firstpassword} onChange = {e => firstPassword(e.target.value)}/><br/>
                        </label>
                        <div className='error__message' id='err2'>Password must be at least 8 characters long.</div>
                        <div className='error__message' id='err3'>Password must contain at least one letter.</div>
                        <div className='error__message' id='err4'>Password must contain at least one number.</div>
                        <label>
                            <input type="password" name="cpassword" placeholder="Confirm Password"
                            value = {confpassword} onChange = {e => confPassword(e.target.value)}/><br/>
                        </label>
                        <div className='error__message' id='err5'>Passwords must match.</div>
                        <input type="submit" className="submit__button" value="Register" onClick = {RegisterBtn}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;