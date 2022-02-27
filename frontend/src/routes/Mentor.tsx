import React from 'react';
import Bar from './Bar';
import beaProfile from '../images/beaProfile.png';
import plus from '../images/plus.svg';
import FormDialog from './test';

import { Link } from "react-router-dom";

const Mentor = () => {
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <h1>Mentor</h1>
                        <hr />
                        <div className='mentee__box'>
                            <img src={beaProfile} className="user__box__icon"/>
                            <div className='user__box__info'>
                                <h2>Bea</h2>
                                <p>She/Her</p>
                                <div className='user__box__title'>HR (Honey Resources)</div>
                            </div>
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
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

var coll = document.getElementsByClassName("expand__button");
var i;
for (i = 0; i < coll.length; i++) {
    console.log("Adding event listener for: " + i);
    coll[i].addEventListener("click", function(this:any) {
        console.log("I have been clicked");
        this.parentElement.parentElement.classList.toggle("active");
        var content = this.parentElement.parentElement.lastChild;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
}

var plans = document.getElementsByClassName("plan__tag");
var j;
for (j = 0; j < plans.length; j++) {
    console.log("Adding event listener for: " + j);
    plans[j].addEventListener("click", function(this:any) {
        console.log("I have been clicked");
        if (this.classList.contains('active')){
            this.style.backgroundColor = "#9CBDBD";
        } else {
            this.style.backgroundColor = "#124040";
        } 
        this.classList.toggle("active");
    });
}

export default Mentor;