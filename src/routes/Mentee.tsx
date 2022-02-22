import React from 'react';
import Bar from './Bar';
import snalProfile from '../images/snalProfile.png';
import plus from '../images/plus.svg';

import FormDialog from './test';

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
    coll[i].addEventListener("click", function(this:any) {
        this.parentElement.parentElement.classList.toggle("active");
        var content = this.parentElement.parentElement.lastChild;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
}

export default Mentee;