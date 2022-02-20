import React from 'react';
import Bar from './Bar';
import snalProfile from '../images/snalProfile.png';

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
                            <div className='session__info'>
                                <div className='session__title'>
                                    Wednesday, Feburary 2nd 
                                    <div className='user__box__tag'>Jump</div>
                                </div>
                                Focus: Jumping vertically, from flat ground
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

export default Mentee;