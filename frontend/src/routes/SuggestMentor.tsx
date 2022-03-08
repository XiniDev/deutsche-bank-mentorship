import React from 'react';
import Bar from './Bar';
import snalProfile from '../images/snalProfile.png';
import beaProfile from '../images/beaProfile.png';

import { Link } from "react-router-dom";

const SuggestMentor = () => {
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>

                        <Link to="/mentors">
                            <div className='back__button'>&#171; BACK</div>
                        </Link>

                        <h1>Mentor Suggestions</h1>
                        <hr />

                        <div className='topics__container'>
                            You are interested in learning: 
                            <span className='user__box__tag'>Fine Art</span>
                            <span className='user__box__tag'>Fortune Telling</span>
                        </div>

                        <div className='suggestion__container'>

                            <Link to="/newmentor">
                            <div className='suggestion__box'>
                                <img src={beaProfile} className="suggested__mentor__profile"/>
                                <h2>Beb</h2>
                                Marketing 
                                <div className='topics__container'>
                                    <span className='user__box__tag'>Fine Art</span>
                                    <span className='user__box__tag'>Cooking</span>
                                </div>
                                5.0/5.0
                            </div>
                            </Link>

                            <Link to="/newmentor">
                            <div className='suggestion__box'>
                                <img src={snalProfile} className="suggested__mentor__profile"/>
                                <h2>Snel</h2>
                                Marketing 
                                <div className='topics__container'>
                                    <span className='user__box__tag'>Fine Art</span>
                                    <span className='user__box__tag'>Beekeeping</span>
                                </div>
                                4.1/5.0
                            </div>
                            </Link>

                            <Link to="/newmentor">
                            <div className='suggestion__box'>
                                <img src={beaProfile} className="suggested__mentor__profile"/>
                                <h2>Bec</h2>
                                Recruiting 
                                <div className='topics__container'>
                                    <span className='user__box__tag'>Fortune Telling</span>
                                </div>
                                3.5/5.0
                            </div>
                            </Link>

                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuggestMentor;