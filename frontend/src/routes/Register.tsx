import React, {useState, useEffect} from 'react';
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';

import Cat from '../images/Cat.svg';

const Register = () => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [firstpassword, firstPassword] = useState('')
    const [confpassword, confPassword] = useState('')
    const [token, setToken,removeToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(false)
    let navigate = useNavigate()

    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const RegisterBtn = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        var conditions = 0
        if (!firstname || !lastname || !email || !firstpassword || !confpassword) {
            conditions += 1
            console.log("PLEASE FILL IN ALL DETAILS")
        }
        if (!email.match(emailformat)) {
            conditions += 1
            console.log("Email invalid")
        }
        if (firstpassword.length < 8) {
            conditions += 1
            console.log("Password must be at least 8 characters long")
        }
        if (firstpassword.search(/[a-zA-Z]/) == -1) {
            conditions += 1
            console.log("Password must contain at least one letter")
        }
        if (firstpassword.search(/\d/) == -1) {
            conditions += 1
            console.log("Password must contain at least one number")
        }
        if (firstpassword != confpassword) {
            conditions += 1
            console.log("Passwords must match")
        }
        if (conditions == 0) {
            const username = email.split("@")[0]
            const password = confpassword
            APIService.RegisterUser({firstname, lastname, email, username, password})
            .then( () => {
                navigate('/')
                console.log()
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
                        <div className="register__names">
                            <label>
                                <input type="text" name="fname" placeholder="First Name"
                                value = {firstname} onChange = {e => setFirstName(e.target.value)}/><br/>
                            </label>
                            <label>
                                <input type="text" name="lname" placeholder="Last Name"
                                value = {lastname} onChange = {e => setLastName(e.target.value)}/><br/>
                            </label>
                        </div>
                        <label>
                            <input type="text" name="email" placeholder="Email Address"
                            value = {email} onChange = {e => setEmail(e.target.value)}/><br/>
                        </label>
                        <label>
                            <input type="password" name="password" placeholder="Password"
                            value = {firstpassword} onChange = {e => firstPassword(e.target.value)}/><br/>
                        </label>
                        <label>
                            <input type="cpassword" name="cpassword" placeholder="Confirm Password"
                            value = {confpassword} onChange = {e => confPassword(e.target.value)}/><br/>
                        </label>
                        <input type="submit" className="submit__button" value="Register" onClick = {RegisterBtn}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;