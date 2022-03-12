import React, { useState, useEffect } from 'react';
import Bar from './Bar';
import snalProfile from '../images/snalProfile.png';
import beaProfile from '../images/beaProfile.png';

import { Link } from "react-router-dom";

import { useCookies } from 'react-cookie';
import APIService from '../APIService';

const ShowMentors = (mentor:any) => {
    return(
        <Link to="/mentee">
            <div className='user__box'>
                <img src={beaProfile} className="user__box__icon"/>
                <div className='user__box__info'>
                    <h2>{mentor.mentor.first_name} {mentor.mentor.last_name}</h2>
                    <div className='user__box__topic'>
                        Learning: 
                        <div className='user__box__tag'>Fine Art</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

const ShowMentorsFail = () => {
    return (<div className='tag__wrapper'>No mentors yet! Suggest a new one below!</div>)
}

const Mentors = () => {
    const [token] = useCookies(['mytoken'])

    const [userID, setID] = useState<any>([])

    const [mentorProfiles, setMentorProfiles] = useState<any[]>([])

    useEffect(() => {
        APIService.getUserID(`${token['mytoken']}`,token['mytoken']).then(resp => setID(resp.user))
        APIService.getPairings(token['mytoken']).then(resp => {
            const mentors = APIService.GetGroupByID(userID,resp,"menteeID")
            if (mentors) {
                for (let i = 0; i < mentors.length; i++) {
                    APIService.getProfile(mentors[i].mentorID, token['mytoken']).then(resp => setMentorProfiles(state => [...state, resp]))
                }
            }
        })
        
    }, [userID])

    const list = mentorProfiles ? mentorProfiles.map((mentor) => <ShowMentors key={mentor.first_name} mentor={mentor}/>) : <ShowMentorsFail/>

    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <h1>Mentors</h1>
                        <hr />
                            {list}
                        <hr />
                        <div className='general__button__container'>
                            <Link to="/suggestmentor">
                                <div className='general__button'>
                                    Suggest New Mentor
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mentors;