import React, { useState, useEffect } from 'react';
import Bar from './Bar';
import snalProfile from '../images/snalProfile.png';
import beaProfile from '../images/beaProfile.png';
import noMentee from '../images/noMentee.svg';

import { Link } from "react-router-dom";

import { useCookies } from 'react-cookie';
import APIService from '../APIService';

const ShowMentees = (mentee:any) => {
    const menteePage = "/mentee?menteeID=" + mentee.mentee.id
    return(
        <Link to={menteePage}>
            <div className='user__box'>
                <img src={snalProfile} className="user__box__icon"/>
                <div className='user__box__info'>
                    <h2>{mentee.mentee.first_name} {mentee.mentee.last_name}</h2>
                    <div className='user__box__topic'>
                        Learning: 
                        <div className='user__box__tag'>Fine Art</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

const ShowButton = () => {
    return (
        <div className='general__button__container'>
            <Link to="/addgroupsession">
                <div className='general__button'>
                    Create Group Session
                </div>
            </Link>
        </div>
    )
}

const ShowMenteesFail = () => {
    return (
        <div className='deco__container'>
            <p>You don't have any mentees yet. Sit back and relax.</p>
            <img src={noMentee} className="deco__image" alt='decorative image'/>
        </div>
    )
}

const Mentees = () => {
    const [token] = useCookies(['mytoken'])

    const [userID, setID] = useState<any>([])

    const [menteeProfiles, setMenteeProfiles] = useState<any[]>([])

    useEffect(() => {
        APIService.getUserID(`${token['mytoken']}`,token['mytoken']).then(resp => setID(resp.user))
        APIService.getPairings(token['mytoken']).then(resp => {
            const mentees = APIService.GetGroupByID(userID,resp,"mentorID")
            if (mentees) {
                for (let i = 0; i < mentees.length; i++) {
                    APIService.getProfile(mentees[i].menteeID, token['mytoken']).then(resp => setMenteeProfiles(state => [...state, resp]))
                }
            }
        })
    }, [userID])
    
    const list = menteeProfiles.length != 0 ? menteeProfiles.map((mentee) => <ShowMentees key={mentee.first_name} mentee={mentee}/>)  : <ShowMenteesFail/>
    const button = menteeProfiles.length != 0 ? <ShowButton/> : null
    
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <h1>Mentees</h1>
                        <hr />
                            {list}
                            {button}
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mentees;