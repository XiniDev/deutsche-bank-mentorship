import React, { Component } from 'react';
import Bar from './Bar';
import beaProfile from '../images/beaProfile.png';
import plus from '../images/plus.svg';
import FormDialog from './test';

import { Link } from "react-router-dom";

import $ from 'jquery';

class Mentor extends Component {
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
                            <h1>Mentor</h1>
                            <hr />
                            <div className='mentee__box'>
                                <div className='user__info'>
                                    <img src={beaProfile} className="user__box__icon"/>
                                    <div className='user__box__info'>
                                        <h2>Bea</h2>
                                        <p>She/Her</p>
                                        <div className='user__box__title'>HR (Honey Resources)</div>
                                    </div>
                                </div>
                                <div className='cancel__relationship__button'>Cancel Relationship</div>
                            </div>
                            <hr />

                            <div className='upcoming__sessions'>
                                <h1>Upcoming Sessions</h1>
                                <Link to="/requestsession">
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
                                            Tuesday, January 25th 
                                            <div className='user__box__tag'>Fine Art</div>
                                        </div>
                                        Focus: Talk about art history
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
                                    <div className='session__feedback'>
                                        <div className='session__feedback__text'>
                                            Talked about famous artists and their lives. Rattus has some good knowledge and that can be further expanded by reading some of the books I recommended to them. They should also have a look art supplies that fall into their budget.
                                        </div>
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

export default Mentor;