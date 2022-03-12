import React, { useState, useEffect } from 'react';
import Bar from './Bar';
import snalProfile from '../images/snalProfile.png';
import beaProfile from '../images/beaProfile.png';
import noMentor from '../images/noMentor.svg';
import rattusProfile from '../images/rattusProfile.png';

import { Link } from "react-router-dom";

import { useCookies } from 'react-cookie';
import APIService from '../APIService';

function RenderGroup(group:any){
        
    for (let i = 0; i < group.length; i++) {
        return(
            <Link to="/mentor">
                <div className='user__box'>
                    <img src={beaProfile} className="user__box__icon"/>
                    <div className='user__box__info'>
                        <h2>{group[i].first_name} {group[i].last_name}</h2>
                        <div className='user__box__topic'>
                            Learning: 
                            <div className='user__box__tag'>Fine Art</div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
    return (
        <div className='deco__container'>
            <p>You currently have no mentors.</p>
            <Link to="/suggestmentor">
                <div className='general__button'>
                    Find me one!
                </div>
            </Link>
            <img src={noMentor} className="deco__image" alt='decorative image'/>
        </div>
    )
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
                    APIService.getProfile(mentors[i].mentorID, token['mytoken']).then(resp => setMentorProfiles([resp]))
                }
            }
        })
        
    }, [userID])

    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <h1>Mentors</h1>
                        <hr />
                            {RenderGroup(mentorProfiles)}
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mentors;