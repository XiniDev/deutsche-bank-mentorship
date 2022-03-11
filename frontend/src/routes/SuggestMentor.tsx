import Bar from './Bar';
import snalProfile from '../images/snalProfile.png';
import beaProfile from '../images/beaProfile.png';
import rattusProfile from '../images/rattusProfile.png';

import React, { Component, useState, useEffect } from 'react';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import { Link, Navigate } from "react-router-dom";
import APIService from '../APIService';
import { profile } from 'console';

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

function GetGroupByReviewedID(userID: any,array: any){
    const group = new Array()
    let n = 0
    for (let i = 0; i < array.length; i++){
        if(array[i].reviewedID_id == userID){
            group[n] = array[i] 
            n += 1
        }
    }
    return group
}

function RenderInterests(group:any){
    if(group.length == 1){
        return(
            <div className='topics__container'>
                <span className='user__box__tag'>{group[0].topic}</span>
            </div>
        )
    }else if(group.length == 2){
        return(
            <div className='topics__container'>
                <span className='user__box__tag'>{group[0].topic}</span>
                <span className='user__box__tag'>{group[1].topic}</span>
            </div>
        )
    }else if(group.length == 3){
        return(
            <div className='topics__container'>
                <span className='user__box__tag'>{' ' + group[0].topic}</span>
                <span className='user__box__tag'>{group[1].topic}</span>
                <span className='user__box__tag'>{group[2].topic}</span>
            </div>
        )
    }else{
        return (<div className='tag__wrapper'>Error</div>)
    }
}

function RenderMentor(MentorProfile:any,MentorSpecs:any,MentorDetails:any){

    return(
        <div className='suggestion__box'>
            <img src={beaProfile} className="suggested__mentor__profile"/>
            <h2>{MentorProfile.first_name + ' ' + MentorProfile.last_name}</h2>
            {MentorDetails.department}
            {RenderInterests(MentorSpecs)}
            2.5/5.0
        </div>
    )

    /*
    if(group.length == 1){
        return(
            
        )
    }else if(group.length == 2){
        return(
            
        )
    }else if(group.length == 3){
        return(
            
        )
    }else{
        return (<div className='tag__wrapper'>Error</div>)
    }
    */
}



function GetGroupByMatchedTopics(interests: any,specialtys: any){
    const group = new Array()
    let n = 0
    for (let i = 0; i < interests.length; i++){
        for (let j = 0; j < specialtys.length; j++){
            if(interests[i].topic == specialtys[j].topic){
                group[n] = specialtys[i] 
                n += 1
                break
            }
        }
    }
    return group
}


const SuggestMentor = () => {

    //User Data
    const [userID, setID] = useState<any>([])
    const [userDetails, setDetails] = useState<any>([])
    const [userProfile, setProfile] = useState<any>([])
    const [interests, setInterests] = useState<any>([])
    const [token] = useCookies(['mytoken'])

    //Mentor Data
    const [MentorDetails, setMDetails] = useState<any>([])
    const [MentorProfile, setMProfile] = useState<any>([])
    const [MentorSpecs, setMSpecs] = useState<any>([])
    const [MentorReviews, setReview] = useState<any>([])

    function RenderMentors(MentorSpecs:any){
        if(MentorSpecs.length == 1){
            APIService.getProfile(MentorSpecs[0].userID_id, token['mytoken']).then(resp => setMProfile(resp))
            APIService.getUserDetails(MentorSpecs[0].userID_id, token['mytoken']).then(resp => setMDetails(resp))
            return(
                RenderMentor(MentorProfile,MentorSpecs[0],MentorDetails)
            )
        }
        
    
    }

    useEffect(() => {
        
        //Fetching User Data
        APIService.getUserID(`${token['mytoken']}`,token['mytoken']).then(resp => setID(resp.user))
        APIService.getProfile(userID, token['mytoken']).then(resp => setProfile(resp))
        APIService.getUserDetails(userID, token['mytoken']).then(resp => setDetails(resp))
        APIService.getInterests(token['mytoken']).then(resp => setInterests(GetGroupByUserID(userID,resp)))
       
        
        
        //APIService.getSpecialties(token['mytoken']).then(resp => setMSpecs(GetGroupByUserID(1,resp)))
        
    }, [userID])

    useEffect(() => {
        APIService.getSpecialties(token['mytoken']).then(resp => setMSpecs(GetGroupByMatchedTopics(interests,resp)))
        APIService.getProfile(1, token['mytoken']).then(resp => setMProfile(resp))
        APIService.getUserDetails(1, token['mytoken']).then(resp => setMDetails(resp))
        
    }, [MentorSpecs])
    
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
                        Your interests Include :{RenderInterests(interests)}
                        <div className='suggestion__container'>

                            <Link to="/newmentor">
                            {RenderMentor(MentorProfile,MentorSpecs,MentorDetails)}
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