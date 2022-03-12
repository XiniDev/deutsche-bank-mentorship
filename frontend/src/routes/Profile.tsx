import Bar from './Bar';
import rattusProfile from '../images/rattusProfile.png';
import pencil from '../images/pencil.svg';

import React, { useState, useEffect } from 'react';
import {useCookies} from 'react-cookie';
import { Link } from "react-router-dom";
import APIService from '../APIService';

const ShowSpecs = (spec:any) => {
    return (
        <div className='tag__wrapper'>
            <div className='specialisation__tag'>{spec.spec.topic}</div>
                <p>{spec.spec.description}</p>
        </div>
    )
}

const ShowIntrs = (intr:any) => {
    return (
        <div className='tag__wrapper'>
            <div className='interest__tag'>{intr.intr.topic}</div>
                <p>{intr.intr.description}</p>
        </div>
    )
}

const ShowFail = () => {
    return (<div className='tag__wrapper'>Click edit to add some entries!</div>)
}

const Profile = () => {
    const [token] = useCookies(['mytoken'])

    const [userID, setID] = useState<any>([])
    const [userDetails, setDetails] = useState<any>([])
    const [profile, setProfile] = useState<any>([])
    const [specs, setSpecs] = useState<any[]>([])
    const [intrs, setIntrs] = useState<any[]>([])

    useEffect(() => {
        
        APIService.getUserID(`${token['mytoken']}`,token['mytoken']).then(resp => setID(resp.user))
        APIService.getProfile(userID, token['mytoken']).then(resp => setProfile(resp))
        APIService.getUserDetails(userID, token['mytoken']).then(resp => setDetails(resp))
        APIService.getSpecialties(token['mytoken']).then(resp => setSpecs(APIService.GetGroupByID(userID,resp,"userID")))
        APIService.getInterests(token['mytoken']).then(resp => setIntrs(APIService.GetGroupByID(userID,resp,"userID")))
        
    }, [userID])

    const specsList = specs ? specs.map((spec) => <ShowSpecs key={spec.topic} spec={spec}/>) : <ShowFail/>
    const intrsList = intrs ? intrs.map((intr) => <ShowIntrs key={intr.topic} intr={intr}/>) : <ShowFail/>

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
                        <div className='profile__specialisations'>
                            {specsList}
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
                            {intrsList}
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;