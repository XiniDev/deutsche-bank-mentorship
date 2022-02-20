import React from 'react';
import Bar from './Bar';
import snalProfile from '../images/snalProfile.png';

const Mentees = () => {
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <h1>Mentees</h1>
                        <hr />
                        <div className='user__box'>
                            <img src={snalProfile} className="user__box__icon"/>
                            <div className='user__box__info'>
                                <h2>Snal</h2>
                                <p>He/Him</p>
                                <div className='user__box__title'>IT (Invertebrate Technology)</div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mentees;