import React from 'react';
import Bar from './Bar';
import rattusProfile from '../images/rattusProfile.png';
import cheveronRight from '../images/cheveronRight.svg';

import { Link } from "react-router-dom";

const EditInterests = () => {

    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <div className="profile__headers--edit">
                            <h1>My Profile</h1>
                            <img src={cheveronRight} className="profile__headers--edit__cheveron"/>
                            <h2>Edit Specialisations</h2>
                        </div>
                        <hr />
                        <div className="interests">
                            <div className="interests__existing">Fine Art</div>
                            <div className="interests__existing">Fortune Telling</div>
                        </div>
                        <form className="editprofile__form--other" id="specialisationForm">
                            <input type="text" className="editprofile__form__inputs--other" name="specialisationname" id="specialisationName" placeholder="Search..."/><br/>
                            <textarea className="editprofile__form__textarea--other" name="specialisationdescription" id="specialisationDescription" placeholder="Description..." form="specialisationForm"/><br/>
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

export default EditInterests;