import React, { Component } from 'react';
import Bar from './Bar';
import snalProfile from '../images/snalProfile.png';
import plus from '../images/plus.svg';
import FormDialog from './test';

import { Link } from "react-router-dom";

import $ from 'jquery';
import { render } from '@testing-library/react';

class Mentee extends Component {
    componentDidMount() {
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
    }
    render() {
        return (
            <div className='background'>
                <div className='container'>
                    <Bar />
                    <div className='content__background'>
                        <div className='content'>
                            <h1>Mentee</h1>
                            <hr />
                            <div className='mentee__box'>
                                <div className='user__info'>
                                    <img src={snalProfile} className="user__box__icon"/>
                                    <div className='user__box__info'>
                                        <h2>Snal</h2>
                                        <p>He/Him</p>
                                        <div className='user__box__title'>IT (Invertebrate Technology)</div>
                                    </div>
                                </div>
                                <div className='cancel__relationship__button'>Cancel Relationship</div>
                            </div>
                            <hr />

                            <div className='upcoming__sessions'>
                                <h1>Upcoming Sessions</h1>
                                <Link to="/addsession">
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
}

export default Mentee;