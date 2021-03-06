import React, { FC, useState, useEffect } from 'react';
import Bar from './Bar';
import beaProfile from '../images/beaProfile.png';
import plus from '../images/plus.svg';
import pencil from '../images/pencil.svg';
import pin from '../images/pin.svg';

import { Link } from "react-router-dom";

import { useCookies } from 'react-cookie';
import APIService from '../APIService';

import $ from 'jquery';

const Mentor: FC = () => {
    
    useEffect(() => {
        $(function() {
            $(".expand__button").on("click", function() {
                console.log("I have been clicked");
                $(this).parent().parent().toggleClass("active");
                var content = $(this).parent().parent().children().last();
                if (content.css("max-height") == "0px"){
                    content.css("max-height", content.prop("scrollHeight")+ "px");
                } else {
                    content.css("max-height", "0px");
                } 
            });
        });
        $(function() {
            $(".plan__tag").on("click", function() {
                console.log("I have been clicked");
                if ($(this).hasClass("active")) {
                    $(this).css("background-color", "#9CBDBD");
                } else {
                    $(this).css("background-color", "#124040");
                }
                $(this).toggleClass("active");
            });
        });
    }, []);

    const [token] = useCookies(['mytoken'])

    const [userID, setID] = useState<any>([])

    let mentorID = document.location.search.substring(1).split("=")[1]
    const [mentorProfile, setMentorProfile] = useState<any>([])
    const [mentorUserDetails, setMentorUserDetails] = useState<any>([])

    useEffect(() => {
        APIService.getUserID(`${token['mytoken']}`,token['mytoken']).then(resp => setID(resp.user))
        APIService.getProfile(mentorID,token['mytoken']).then(resp => {setMentorProfile(resp)})
        APIService.getUserDetails(mentorID,token['mytoken']).then(resp => {setMentorUserDetails(resp)})
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

                        <div className='upcoming__sessions'>
                            <h1>Mentor</h1>
                            <Link to={"/timeline?mentorID=" + mentorID} className="timeline__link">
                                <img src={pin} className="timeline__img"/>
                                View Timeline
                            </Link>
                        </div>
                        <hr />

                        <div className='mentee__box'>
                            <div className='user__info'>
                                <img src={beaProfile} className="user__box__icon"/>
                                <div className='user__box__info'>
                                    <h2>{mentorProfile.first_name}</h2>
                                    <p>{mentorUserDetails.pronouns}</p>
                                    <div className='user__box__title'>{mentorUserDetails.department}</div>
                                </div>
                            </div>
                            <div className='cancel__relationship__button'>Cancel Relationship</div>
                        </div>
                        <hr />
                        
                        <div className='upcoming__sessions'>
                            <h1>Course Information</h1>
                            <Link to={"/editmilestones?mentorID=" + mentorID} className='edit__milestone__button'>
                                <img src={pencil} className="edit__symbol"/>
                                Edit Milestones
                            </Link>
                        </div>

                        <div className='relationship__info__box'>
                            <p>Topic: Fine Art</p>
                            <p>Started course on: 22/01/2022</p>
                            <p>Milestones:</p>
                            <ol>
                                <li>Make 10 sketches</li>
                                <li>Make 5 oil paintings</li>
                                <li>Hold small exhibition at office</li>
                            </ol>
                        </div>
                        <hr />

                        <div className='upcoming__sessions'>
                            <h1>Upcoming Sessions</h1>
                            <Link to={"/requestsession?mentorID=" + mentorID}>
                                <div className='add__session__button'>
                                    <img src={plus} className="plus__symbol"/>
                                    Request Session
                                </div>
                            </Link>
                        </div>

                        <div className='session__box'>
                            <div className='session__overview'>
                                <div className='session__info'>
                                    <div className='session__title'>
                                        Tuesday, Feburary 1st 
                                        <div className='user__box__tag'>Fine Art</div>
                                    </div>
                                    Focus: First set of landscape sketches
                                </div>
                                <img src={plus} className="expand__button"/>
                            </div>
                            <div className="plan__of__action">
                                <div className='plan__tag'>Prepare materials</div>
                                <div className='plan__tag'>Practice sketching lines</div>
                                <div className='plan__tag'>Sketch 3 small sketches</div>
                            </div>
                        </div>

                        <hr/>
                        <h1>Previous Sessions</h1>

                        <div className='session__box'>
                            <div className='session__overview'>
                                <div className='session__info'>
                                    <div className='session__title'>
                                        Tuesday, January 25th 
                                        <div className='user__box__tag'>Fine Art</div>
                                    </div>
                                    Focus: Talk about art history
                                </div>
                                <img src={plus} className="expand__button"/>
                            </div>
                            <div className="plan__of__action">
                                <div className='plan__tag'>Base knowledge</div>
                                <div className='plan__tag'>Famous artists</div>
                                <div className='plan__tag'>Free chat</div>
                                <hr/>
                                <div className="session__feedback__title">Session Feedback</div>
                                <div className='session__feedback'>
                                    <div className='session__feedback__text'>
                                        Talked about famous artists and their lives. Rattus has some good knowledge and that can be further expanded by reading some of the books I recommended to them. They should also have a look art supplies that fall into their budget.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <Link to={"/ratementor?mentorID=" + mentorID} className='center'>
                            <div className='general__button'>Rate Mentor</div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mentor;