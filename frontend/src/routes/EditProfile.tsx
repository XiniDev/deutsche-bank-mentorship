import React, { Component, useState, useEffect } from 'react';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import Bar from './Bar';
import rattusProfile from '../images/rattusProfile.png';
import cheveronRight from '../images/cheveronRight.svg';

import { Link, Navigate } from "react-router-dom";
import APIService from '../APIService';


const EditProfile = () => {

    const [userID, setID] = useState<any>([])
    const [userDetails, setDetails] = useState<any>([])
    const [profile, setProfile] = useState<any>([])
    const [specs, setSpecs] = useState<any>([])
    const [token] = useCookies(['mytoken'])
    let navigate = useNavigate()
    
    useEffect(() => {

        APIService.getUserID(`${token['mytoken']}`,token['mytoken']).then(resp => setID(resp.user));
        APIService.getProfile(userID,token['mytoken']).then(resp => setProfile(resp));
        APIService.getUserDetails(userID,token['mytoken']).then(resp => setDetails(resp));
    
    }, [userID])

    const EditProfileBtn = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
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
                        <form className="editprofile__form">
                            <label htmlFor="editFirstName" className="editprofile__form__labels">First Name</label>
                            <input type="text" className="editprofile__form__inputs" name="firstname" id="editFirstName" placeholder="Your First Name" value={profile.first_name} onChange = {e => setProfile({first_name: e.target.value})}/><br/>
                            <label htmlFor="editLastName" className="editprofile__form__labels">Last Name</label>
                            <input type="text" className="editprofile__form__inputs" name="lastname" id="editLastName" placeholder="Your Last Name" value={profile.last_name} onChange = {e => setProfile({last_name: e.target.value})}/><br/>
                            <label htmlFor="editPronouns" className="editprofile__form__labels">Pronouns</label>
                            <input type="text" className="editprofile__form__inputs" name="pronouns" id="editPronouns" placeholder="Your Pronouns" value={userDetails.pronouns} onChange = {e => setDetails({pronouns: e.target.value})}/><br/>
                            <label htmlFor="editCompanyTitle" className="editprofile__form__labels">Company Title</label>
                            <input type="text" className="editprofile__form__inputs" name="companytitle" id="editCompanyTitle" placeholder="Your Company Title" value={userDetails.department} onChange = {e => setDetails({department: e.target.value})}/><br/>
                            <label htmlFor="editEmail" className="editprofile__form__labels">Email</label>
                            <input type="text" className="editprofile__form__inputs" name="email" id="editEmail" placeholder="Your Email" value={profile.email} onChange = {e => setProfile({email: e.target.value})}/><br/>
                            <hr />
                            <label htmlFor="editAvatar" className="editprofile__form__labels">Avatar</label>
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
    );
}

export default EditProfile;