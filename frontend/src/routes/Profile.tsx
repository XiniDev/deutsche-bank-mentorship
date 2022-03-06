import React, { Component, useState, useEffect } from 'react';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import Bar from './Bar';
import rattusProfile from '../images/rattusProfile.png';
import pencil from '../images/pencil.svg';

import { Link, Navigate } from "react-router-dom";
import APIService from '../APIService';

const Profile = () => {

    const [userID, setID] = useState<any>([])
    const [token] = useCookies(['mytoken'])

    
   
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        
    };
    useEffect(() => {
        //console.log()
        fetch('http://127.0.0.1:8000/api/userID/'+`${token['mytoken']}`, requestOptions)
            .then(resp => resp.json())
            .then(resp => setID(resp.user));
            
    }, [])   

    
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <div className="profile__headers">
                            <h1>My Profile</h1>
                            <Link to="/editprofile" className="editprofile">
                                <img src={pencil} className="editprofile__img"/>
                                Edit
                            </Link>
                        </div>
                        <hr />
                        <div className='profile__overview'>
                            <img src={rattusProfile} className="profile__picture"/>
                            <div className='profile__info'>
                                <h1>{userID}
                                </h1>
                                <hr />
                                <div className='profile__title'>CEO (Cheese Executive Officer)</div>
                                <div className='profile__email'>rattus.rattus@rattus.com</div>
                            </div>
                        </div>
                        <hr />
                        <div className="profile__headers">
                            <h2>Specialisations</h2>
                            <Link to="/editspecialisations" className="editprofile">
                                <img src={pencil} className="editprofile__img"/>
                                Edit
                            </Link>
                        </div>
                        <div className='profile__specialisations'>
                            <div className='tag__wrapper'>
                                <div className='specialisation__tag'>Jump</div>
                                <p>I am very good at jumping especially through hoops.</p>
                            </div>
                            <div className='tag__wrapper'>
                                <div className='specialisation__tag'>Cheese and Wine</div>
                                <p>I have 5+ years of experience working at a winery.</p>
                            </div>
                            <div className='tag__wrapper'>
                                <div className='specialisation__tag'>Other Things</div>
                                <p>I am also skilled at doing other things.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="profile__headers">
                            <h2>Interested In</h2>
                            <Link to="/editinterests" className="editprofile">
                                <img src={pencil} className="editprofile__img"/>
                                Edit
                            </Link>
                        </div>
                        <div className='profile__interests'>
                            <div className='tag__wrapper'>
                                <div className='interest__tag'>Fine Art</div>
                                <p>Interested in picking up life drawing.</p>
                            </div>
                            <div className='tag__wrapper'>
                                <div className='interest__tag'>Fortune Telling</div>
                                <p>Want to learn how to read tarot cards.</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;