import React, { Component, useState, useEffect } from 'react';
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
    
    useEffect(() => {

        APIService.getUserID(`${token['mytoken']}`).then(resp => setID(resp.user));
        APIService.getProfile(userID).then(resp => setProfile(resp));
        APIService.getUserDetails(userID).then(resp => setDetails(resp));
    
    }, [userID])

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
                            <label htmlFor="editProfileName" className="editprofile__form__labels">Profile Name</label>
                            <input type="text" className="editprofile__form__inputs" name="profilename" id="editProfileName" placeholder="Your Profile Name" value={profile.first_name}/><br/>
                            <label htmlFor="editPronouns" className="editprofile__form__labels">Pronouns</label>
                            <input type="text" className="editprofile__form__inputs" name="pronouns" id="editPronouns" placeholder="Your Pronouns" value={userDetails.pronouns}/><br/>
                            <label htmlFor="editCompanyTitle" className="editprofile__form__labels">Company Title</label>
                            <input type="text" className="editprofile__form__inputs" name="companytitle" id="editCompanyTitle" placeholder="Your Company Title" value={userDetails.department}/><br/>
                            <label htmlFor="editEmail" className="editprofile__form__labels">Email</label>
                            <input type="text" className="editprofile__form__inputs" name="email" id="editEmail" placeholder="Your Email" value={profile.email}/><br/>
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
                                <input type="submit" className="submit__button" value="Done"/>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;