import React, { useState, useEffect } from 'react';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import Bar from './Bar';
import rattusProfile from '../images/rattusProfile.png';
import cheveronRight from '../images/cheveronRight.svg';

import { Link } from "react-router-dom";
import APIService from '../APIService';


const EditProfile = () => {

    const [userID, setID] = useState<any>([])
    const [userDetails, setDetails] = useState<any>([])
    const [profile, setProfile] = useState<any>([])
    const [specs, setSpecs] = useState<any>([])
    const [token] = useCookies(['mytoken'])
    let navigate = useNavigate()

    const [first_name, setFirstName] = useState<any>([])
    const [last_name, setLastName] = useState<any>([])
    const [pronouns, setPronouns] = useState<any>([])
    const [department, setDepartment] = useState<any>([])
    const [email, setEmail] = useState<any>([])
    
    useEffect(() => {

        APIService.getUserID(`${token['mytoken']}`,token['mytoken']).then(resp => setID(resp.user));
        APIService.getProfile(userID,token['mytoken']).then(resp => {
            setFirstName(resp.first_name)
            setLastName(resp.last_name)
            setEmail(resp.email)
        });
        APIService.getUserDetails(userID,token['mytoken']).then(resp => {
            setPronouns(resp.pronouns)
            setDepartment(resp.department)
        });
    
    }, [userID])
        
    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const EditProfileBtn = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        var conditions = 0
        if (!first_name || !last_name || !email || !pronouns || !department) {
            conditions += 1
            console.log("PLEASE FILL IN ALL DETAILS")
        }
        if (!email.match(emailformat)) {
            conditions += 1
            console.log("Email invalid")
        }
        if (conditions == 0) {
            const username = email.split("@")[0]
            APIService.ChangeProfile({first_name, last_name, email, username}, userID, token['mytoken'])
            .then( () => console.log())
            .catch( error => console.log(error))
            APIService.ChangeUserDetails({pronouns, department}, userID, token['mytoken'])
            .then( () => {
                navigate('/Profile')
                console.log()
            })
            .catch( error => console.log(error))
        }
    }

    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <div className="profile__headers--edit">
                            <Link className="myprofile__link" to="/profile"><h1>My Profile</h1></Link>
                            <img src={cheveronRight} className="profile__headers--edit__cheveron"/>
                            <h2>Edit Profile</h2>
                        </div>
                        <hr />
                        <div className='editprofile'>
                            <form className="editprofile__form">

                                <div className='editprofile__fields'>

                                    <div className='editprofile__field'>
                                        <label htmlFor="editFirstName" className="editprofile__form__labels">First Name</label>
                                        <input type="text" className="editprofile__form__inputs" name="firstname" id="editFirstName" placeholder="Your First Name" value={first_name} onChange = {e => setFirstName(e.target.value)}/>
                                    </div>

                                    <div className='editprofile__field'>
                                        <label htmlFor="editLastName" className="editprofile__form__labels">Last Name</label>
                                        <input type="text" className="editprofile__form__inputs" name="lastname" id="editLastName" placeholder="Your Last Name" value={last_name} onChange = {e => setLastName(e.target.value)}/>
                                    </div>

                                    <div className='editprofile__field'>
                                        <label htmlFor="editPronouns" className="editprofile__form__labels">Pronouns</label>
                                        <input type="text" className="editprofile__form__inputs" name="pronouns" id="editPronouns" placeholder="Your Pronouns" value={pronouns} onChange = {e => setPronouns(e.target.value)}/>
                                    </div>

                                    <div className='editprofile__field'>
                                        <label htmlFor="editCompanyTitle" className="editprofile__form__labels">Company Title</label>
                                        <input type="text" className="editprofile__form__inputs" name="companytitle" id="editCompanyTitle" placeholder="Your Company Title" value={department} onChange = {e => setDepartment(e.target.value)}/>
                                    </div>

                                    <div className='editprofile__field'>
                                        <label htmlFor="editEmail" className="editprofile__form__labels">Email</label>
                                        <input type="text" className="editprofile__form__inputs" name="email" id="editEmail" placeholder="Your Email" value={email} onChange = {e => setEmail(e.target.value)}/>
                                    </div>
                                
                                </div>

                                <hr />
                                
                                <span className='avatar__title'>Avatar</span>
                                <div className="editprofile__avatar__previews">
                                    <img src={rattusProfile} className="editprofile__avatar__preview--large"/>
                                    <img src={rattusProfile} className="editprofile__avatar__preview--medium"/>
                                    <img src={rattusProfile} className="editprofile__avatar__preview--small"/>
                                </div>
                                <input type="file" className="editprofile__form__inputs--file" name="avatar" id="editAvatar"/><br/>

                                <hr />

                                <div className="editprofile__form__buttons">
                                    <Link to="/profile" className="editprofile__form__buttons__cancel">Cancel</Link>
                                    <input type="submit" className="submit__button" value="Done" onClick = {EditProfileBtn}/>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;