
import Bar from './Bar';
import snalProfile from '../images/snalProfile.png';
import beaProfile from '../images/beaProfile.png';
import React, { Component, useState, useEffect } from 'react';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import rattusProfile from '../images/rattusProfile.png';
import pencil from '../images/pencil.svg';

import { Link, Navigate } from "react-router-dom";
import APIService from '../APIService';

const SuggestMentor = () => {

    const [interests, setInterests] = useState<any>([])
    const [specs, setSpecs] = useState<any>([])
    const [userID, setID] = useState<any>([])
    const [possibleMentors, setMentors] = useState<any>([])
    const [token] = useCookies(['mytoken'])

    const [mentorSpecs, setMSpecs] = useState<any>([])
    const [mentorUser, setMUser] = useState<any>([])

    function GetGroupByUserID(userID: any,array: any){
        const group = new Array()
        let n = 0
        for (let i = 0; i < array.length; i++){
            if(array[i].userID == userID){
                group[n] = array[i] 
                n += 1
            }
        }
        return group
    }

    function RenderGroup(group:any){
        if(group.length == 1){
            return(
                <div className='topics__container'>
                    You are interested in learning: 
                    <span className='user__box__tag'>{group[0].topic}</span>
                </div>
            )
        }else if(group.length == 2){
            return(
                <div className='topics__container'>
                    You are interested in learning: 
                    <span className='user__box__tag'>{group[0].topic}</span>
                    <span className='user__box__tag'>{group[1].topic}</span>
                </div>
            )
            
        }else if(group.length == 3){
            return(
                <div className='topics__container'>
                    You are interested in learning: 
                    <span className='user__box__tag'>{group[0].topic}</span>
                    <span className='user__box__tag'>{group[1].topic}</span>
                    <span className='user__box__tag'>{group[2].topic}</span>
                </div>
            )
        }
        return (<div className='tag__wrapper'>Click edit to add some entries!</div>)
    }
    
   
    
    
    
    useEffect(() => {
        
        APIService.getUserID(`${token['mytoken']}`,token['mytoken']).then(resp => setID(resp.user));
        APIService.getInterests(token['mytoken']).then(resp => setInterests(GetGroupByUserID(userID,resp)))
        //APIService.getMentors(token['mytoken']).then(resp => setMentors(resp))
        
        
    }, [userID])

    
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>

                        <Link to="/mentors">
                            <div className='back__button'>&#171; BACK</div>
                        </Link>

                        <h1>Mentor Suggestions</h1>
                        <hr />

                        {RenderGroup(interests)}

                        <div className='suggestion__container'>

                            <Link to="/newmentor">
                            {}
                            </Link>

                            <Link to="/newmentor">
                            <div className='suggestion__box'>
                                <img src={snalProfile} className="suggested__mentor__profile"/>
                                <h2>Snel</h2>
                                Marketing 
                                <div className='topics__container'>
                                    <span className='user__box__tag'>Fine Art</span>
                                    <span className='user__box__tag'>Beekeeping</span>
                                </div>
                                4.1/5.0
                            </div>
                            </Link>

                            <Link to="/newmentor">
                            <div className='suggestion__box'>
                                <img src={beaProfile} className="suggested__mentor__profile"/>
                                <h2>Bec</h2>
                                Recruiting 
                                <div className='topics__container'>
                                    <span className='user__box__tag'>Fortune Telling</span>
                                </div>
                                3.5/5.0
                            </div>
                            </Link>

                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuggestMentor;