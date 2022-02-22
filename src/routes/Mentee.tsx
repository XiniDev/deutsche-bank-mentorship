import React from 'react';
import Bar from './Bar';
import snalProfile from '../images/snalProfile.png';
import plus from '../images/plus.svg';

const Mentee = () => {
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <h1>Mentees</h1>
                        <hr />
                        <div className='mentee__box'>
                            <img src={snalProfile} className="user__box__icon"/>
                            <div className='user__box__info'>
                                <h2>Snal</h2>
                                <p>He/Him</p>
                                <div className='user__box__title'>IT (Invertebrate Technology)</div>
                            </div>
                        </div>
                        <hr />
                        <h1>Upcoming Sessions</h1>
                        <div className='session__box'>
                            <div className='session__overview'>
                                <div className='session__info'>
                                    <div className='session__title'>
                                        Wednesday, Feburary 2nd 
                                        <div className='user__box__tag'>Jump</div>
                                    </div>
                                    Focus: Jumping vertically, from flat ground
                                </div>
                                <img src={plus} className="add__item__button"/>
                            </div>
                            <div className="plan__of__action">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <hr />
                        <h1>Previous Sessions</h1>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

var coll = document.getElementsByClassName("session__box");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function(this:any) {
        this.classList.toggle("active");
        var content = this.lastChild;
        if (content.style.maxHeight){
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
}

export default Mentee;