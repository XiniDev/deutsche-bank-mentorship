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
import Mentor from './Mentor';

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
    
    
    if(MentorSpecs.length > 0){
        return(
            <div className='suggestion__box'>
            <img src={beaProfile} className="suggested__mentor__profile"/>
            <h2>{MentorProfile.first_name + ' ' + MentorProfile.last_name}</h2>
            {MentorDetails.department}
            {RenderInterests(MentorSpecs)}
            2.5/5.0
            </div>
        )
    }
}



function GetUserIDs(MentorSpecs:any){
    let IDs = new Array()
    for (let i = 0; i < MentorSpecs.length; i++){
        IDs[i] = MentorSpecs[i].userID
    }
    return IDs
}


function GetUserDetails(MentorIDs:any,MentorSpecs:any,token:any,temp:any){
    let MentorUserDetails = new Array()
    for (let i = 0; i < MentorSpecs.length; i++){
        APIService.getUserDetails(MentorIDs[i], token['mytoken']).then(resp => temp.setTemp(resp))
        MentorUserDetails[i] = temp  
    }
    return MentorUserDetails
}

const SuggestMentor = () => {

    //User Data
    const [userID, setID] = useState<any>([])
    const [userDetails, setDetails] = useState<any>([])
    const [userProfile, setProfile] = useState<any>([])
    const [interests, setInterests] = useState<any>([])
    const [token] = useCookies(['mytoken'])

    //Mentor Data
    
    const [MentorUserIDs, setMID] = useState<any>([])
    const [ValidMentors, setMValid] = useState<any>([])
    const [temp, setTemp] = useState<any>([])
    const [MentorReviews, setReview] = useState<any>([])
    

    const [MentorDetails, setMDetails] = useState<any>([])
    const [MentorProfile, setMProfile] = useState<any>([])
    const [MentorSpecs, setMSpecs] = useState<any>([])
    const [MentorDetails1, setMDetails1] = useState<any>([])
    const [MentorProfile1, setMProfile1] = useState<any>([])
    const [MentorSpecs1, setMSpecs1] = useState<any>([])
    const [MentorDetails2, setMDetails2] = useState<any>([])
    const [MentorProfile2, setMProfile2] = useState<any>([])
    const [MentorSpecs2, setMSpecs2] = useState<any>([])
    
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => setCounter(counter + 1);
    let n = 0
    console.log(counter)
        
      
    
    
   
    useEffect(() => {
        //Fetching User Data
        APIService.getUserID(`${token['mytoken']}`,token['mytoken']).then(resp => setID(resp.user))
        APIService.getProfile(userID, token['mytoken']).then(resp => setProfile(resp))
        APIService.getUserDetails(userID, token['mytoken']).then(resp => setDetails(resp))
        APIService.getInterests(token['mytoken']).then(resp => setInterests(GetGroupByUserID(userID,resp)))
        
    }, [userID,counter])

    useEffect(() => {

        APIService.getSpecialties(token['mytoken']).then(resp => setMValid(GetGroupByMatchedTopics(interests,resp)))

    }, [interests])

    useEffect(() => {

        setMID(GetUserIDs(ValidMentors))
        
    }, [ValidMentors])


    
    useEffect(() => {
        
        try{
            APIService.getProfile(MentorUserIDs[counter], token['mytoken']).then(resp => setMProfile(resp))
            APIService.getUserDetails(MentorUserIDs[counter], token['mytoken']).then(resp => setMDetails(resp))
            APIService.getSpecialties(token['mytoken']).then(resp => setMSpecs(APIService.GetGroupByID(MentorUserIDs[counter],resp,"userID")))
        }catch{}
        try{
            APIService.getProfile(MentorUserIDs[counter+1], token['mytoken']).then(resp => setMProfile1(resp))
            APIService.getUserDetails(MentorUserIDs[counter+1], token['mytoken']).then(resp => setMDetails1(resp))
            APIService.getSpecialties(token['mytoken']).then(resp => setMSpecs1(APIService.GetGroupByID(MentorUserIDs[counter+1],resp,"userID")))
        }catch{}
        try{
            APIService.getProfile(MentorUserIDs[counter+2], token['mytoken']).then(resp => setMProfile2(resp))
            APIService.getUserDetails(MentorUserIDs[counter+2], token['mytoken']).then(resp => setMDetails2(resp))
            APIService.getSpecialties(token['mytoken']).then(resp => setMSpecs2(APIService.GetGroupByID(MentorUserIDs[counter+2],resp,"userID")))
        }catch{}
        

    }, [MentorUserIDs])
    
    
    
    
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
                            {RenderMentor(MentorProfile1,MentorSpecs1,MentorDetails1)}
                            </Link>

                            <Link to="/newmentor">
                            {RenderMentor(MentorProfile2,MentorSpecs2,MentorDetails2)}
                            </Link>

                        </div>
                        <hr />
                    </div>
                    <div> 
                    
        
                    </div>
                    <input className="submit__button" value="More Mentors" onClick = {incrementCounter}  />
                </div>
            </div>
        </div>
    );
}

export default SuggestMentor;