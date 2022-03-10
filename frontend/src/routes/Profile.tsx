import Bar from './Bar';
import rattusProfile from '../images/rattusProfile.png';
import pencil from '../images/pencil.svg';

import React, { Component, useState, useEffect } from 'react';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import { Link, Navigate } from "react-router-dom";
import APIService from '../APIService';

function RenderGroup(group:any){
        
    if(group.length == 1){
        return(
            <div className='profile__specialisations'>
                <div className='tag__wrapper'>
                    <div className='specialisation__tag'>{group[0].topic}</div>
                        <p>{group[0].description}</p>
                </div>
            </div>
        )
    }else if(group.length == 2){
        return(
            <div className='profile__specialisations'>
                <div className='tag__wrapper'>
                    <div className='specialisation__tag'>{group[0].topic}</div>
                        <p>{group[0].description}</p>
                </div>
                <div className='tag__wrapper'>
                    <div className='specialisation__tag'>{group[1].topic}</div>
                        <p>{group[1].description}</p>
                </div>
            </div>
        )
        
    }else if(group.length == 3){
        return(
            <div className='profile__specialisations'>
                <div className='tag__wrapper'>
                    <div className='specialisation__tag'>{group[0].topic}</div>
                        <p>{group[0].description}</p>
                </div>
                <div className='tag__wrapper'>
                    <div className='specialisation__tag'>{group[1].topic}</div>
                        <p>{group[1].description}</p>
                </div>
                <div className='tag__wrapper'>
                    <div className='specialisation__tag'>{group[2].topic}</div>
                        <p>{group[2].description}</p>
                </div>
            </div>
        )
    }
    return (<div className='tag__wrapper'>Click edit to add some entries!</div>)
}
const Profile = () => {

    const [userID, setID] = useState<any>([])
    const [userDetails, setDetails] = useState<any>([])
    const [profile, setProfile] = useState<any>([])
    const [specs, setSpecs] = useState<any>([])
    const [interests, setInterests] = useState<any>([])
    const [token] = useCookies(['mytoken'])

    useEffect(() => {
        
        APIService.getUserID(`${token['mytoken']}`,token['mytoken']).then(resp => setID(resp.user))
        APIService.getProfile(userID, token['mytoken']).then(resp => setProfile(resp))
        APIService.getUserDetails(userID, token['mytoken']).then(resp => setDetails(resp))
        APIService.getSpecialties(token['mytoken']).then(resp => setSpecs(APIService.GetGroupByID(userID,resp,"userID")))
        APIService.getInterests(token['mytoken']).then(resp => setInterests(APIService.GetGroupByID(userID,resp,"userID")))
        
        
    }, [userID])   

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
                                <div className='profile__name__pronouns'>
                                    <h1>{profile.first_name} {profile.last_name}</h1>
                                    <p>{userDetails.pronouns}</p>
                                </div>
                                <hr />
                                <div className='profile__title'>{userDetails.department}</div>
                                <div className='profile__email'>{profile.email}</div>
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
                        {RenderGroup(specs)}
                        <hr />

                        <div className="profile__headers">
                            <h2>Interested In</h2>
                            <Link to="/editinterests" className="editprofile">
                                <img src={pencil} className="editprofile__img"/>
                                Edit
                            </Link>
                        </div>
                        {RenderGroup(interests)}
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;