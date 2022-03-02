import React from 'react';
import Bar from './Bar';
import snalProfile from '../images/snalProfile.png';
import beaProfile from '../images/beaProfile.png';

import { Link } from "react-router-dom";

const Mentees = () => {
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <h1>Mentees</h1>
                        <hr />
                        <Link to="/mentee">
                            <div className='user__box'>
                                <img src={snalProfile} className="user__box__icon"/>
                                <div className='user__box__info'>
                                    <h2>Snal</h2>
                                    <div className='user__box__topic'>
                                        Mentoring in: 
                                        <div className='user__box__tag'>Jump</div>
                                    </div>
                                </div>
                            </div>
                            <div className='user__box'>
                                <img src={beaProfile} className="user__box__icon"/>
                                <div className='user__box__info'>
                                    <h2>Bea</h2>
                                    <div className='user__box__topic'>
                                        Mentoring in: 
                                        <div className='user__box__tag'>Cheese and Wine</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <hr />
                        <div className='general__button__container'>
                            <Link to="/addgroupsession">
                                <div className='general__button'>
                                    Create Group Session
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mentees;