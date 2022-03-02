import React from 'react';
import Bar from './Bar';
import rattusProfile from '../images/rattusProfile.png';
import cheveronRight from '../images/cheveronRight.svg';

import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <div className="profile__headers--edit">
                            <h1>My Profile</h1>
                            <img src={cheveronRight} className="profile__headers--edit__cheveron"/>
                            <h2>Edit Profile</h2>
                        </div>
                        <hr />
                        <form className="editprofile__form">
                            <label htmlFor="editProfileName" className="editprofile__form__labels">Profile Name</label>
                            <input type="text" className="editprofile__form__inputs" name="profilename" id="editProfileName" placeholder="Your Profile Name" value="Rattus Rattus"/><br/>
                            <label htmlFor="editPronouns" className="editprofile__form__labels">Pronouns</label>
                            <input type="text" className="editprofile__form__inputs" name="pronouns" id="editPronouns" placeholder="Your Pronouns" value="They/Them"/><br/>
                            <label htmlFor="editCompanyTitle" className="editprofile__form__labels">Company Title</label>
                            <input type="text" className="editprofile__form__inputs" name="companytitle" id="editCompanyTitle" placeholder="Your Company Title" value="CEO (Cheese Executive Officer)"/><br/>
                            <label htmlFor="editEmail" className="editprofile__form__labels">Email</label>
                            <input type="text" className="editprofile__form__inputs" name="email" id="editEmail" placeholder="Your Email" value="rattus.rattus@rattus.com"/><br/>
                            <hr />
                            <label htmlFor="editAvatar" className="editprofile__form__labels">Avatar</label>
                            <input type="file" className="editprofile__form__inputs" name="avatar" id="editAvatar"/><br/>
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

export default Profile;