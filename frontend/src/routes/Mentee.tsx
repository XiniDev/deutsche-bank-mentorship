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
import { render } from '@testing-library/react';

const Mentee: FC = () => {
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

    let menteeID = document.location.search.substring(1).split("=")[1]
    const [menteeProfile, setMenteeProfile] = useState<any>([])
    const [menteeUserDetails, setMenteeUserDetails] = useState<any>([])

    useEffect(() => {
        APIService.getUserID(`${token['mytoken']}`,token['mytoken']).then(resp => setID(resp.user))
        APIService.getProfile(menteeID,token['mytoken']).then(resp => {setMenteeProfile(resp)})
        APIService.getUserDetails(menteeID,token['mytoken']).then(resp => {setMenteeUserDetails(resp)})
    }, [userID])

    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>

                        <Link to="/mentees">
                                <div className='back__button'>&#171; BACK</div>
                        </Link>

                        <div className='upcoming__sessions'>
                            <h1>Mentee</h1>
                            <Link to="/timeline" className="timeline__link">
                                <img src={pin} className="timeline__img"/>
                                View Timeline
                            </Link>
                        </div>
                        <hr />

                        <div className='mentee__box'>
                            <div className='user__info'>
                                <img src={beaProfile} className="user__box__icon"/>
                                <div className='user__box__info'>
                                    <h2>{menteeProfile.first_name}</h2>
                                    <p>{menteeUserDetails.pronouns}</p>
                                    <div className='user__box__title'>{menteeUserDetails.department}</div>
                                </div>
                            </div>
                            <div className='cancel__relationship__button'>Cancel Relationship</div>
                        </div>
                        <hr />

                        <div className='upcoming__sessions'>
                            <h1>Course Information</h1>
                        </div>

                        <div className='relationship__info__box'>
                            <p>Topic: Jump</p>
                            <p>Started course on: 25/01/2022</p>
                            <p>Milestones:</p>
                            <ol>
                                <li>Successfully separate self from ground</li>
                                <li>Jump through first hoop</li>
                                <li>Jump through hoop on fire</li>
                            </ol>
                        </div>
                        <hr />

                        <div className='upcoming__sessions'>
                            <h1>Upcoming Sessions</h1>
                            <Link to={"/addsession?menteeID=" + menteeID}>
                                <div className='add__session__button'>
                                    <img src={plus} className="plus__symbol"/>
                                    New Session
                                </div>
                            </Link>
                        </div>

                        <div className='session__box'>
                            <div className='session__overview'>
                                <div className='session__info'>
                                    <div className='session__title'>
                                        Wednesday, Feburary 2nd 
                                        <div className='user__box__tag'>Jump</div>
                                    </div>
                                    Focus: Jumping vertically, from flat ground
                                </div>
                                <img src={plus} className="expand__button"/>
                            </div>
                            <div className="plan__of__action">
                                <div className='plan__tag'>Straighten back</div>
                                <div className='plan__tag'>Jumping position</div>
                                <div className='plan__tag'>Make the jump</div>
                                <div className='plan__tag'>Land without fail</div>
                            </div>
                        </div>

                        <div className='session__box'>
                            <div className='session__overview'>
                                <div className='session__info'>
                                    <div className='session__title'>
                                        Friday, Feburary 4th 
                                        <div className='user__box__tag'>Jump</div>
                                    </div>
                                    Focus: Jumping through hoops
                                </div>
                                <img src={plus} className="expand__button"/>
                            </div>
                            <div className="plan__of__action">
                                <div className='plan__tag'>Straighten back</div>
                                <div className='plan__tag'>Jumping position</div>
                                <div className='plan__tag'>Make the jump</div>
                                <div className='plan__tag'>Land without fail</div>
                            </div>
                        </div>

                        <hr/>
                        <h1>Previous Sessions</h1>

                        <div className='session__box'>
                            <div className='session__overview'>
                                <div className='session__info'>
                                    <div className='session__title'>
                                        Friday, January 28th 
                                        <div className='user__box__tag'>Jump</div>
                                    </div>
                                    Focus: Learning what jumping is
                                </div>
                                <img src={plus} className="expand__button"/>
                            </div>
                            <div className="plan__of__action">
                                <div className='plan__tag'>Straighten back</div>
                                <div className='plan__tag'>Jumping position</div>
                                <div className='plan__tag'>Make the jump</div>
                                <div className='plan__tag'>Land without fail</div>
                                <hr/>
                                <div className="session__feedback__title">Session Feedback</div>
                                <div className='session__feedback__form'>
                                    <br/>
                                    <input type="text" name="feedback"/>
                                    <button>Send Feedback</button>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mentee;