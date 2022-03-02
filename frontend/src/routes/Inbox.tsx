import React from 'react';
import Bar from './Bar';
import beaProfile from '../images/beaProfile.png';
import snalProfile from '../images/snalProfile.png';
import { Link } from 'react-router-dom';

const Inbox = () => {
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <h1>Messages</h1>
                        <hr/>
                        <Link to='/message'>
                            <div className='user__box'>
                                <img src={snalProfile} className="user__box__icon"/>
                                <div className='user__box__info'>
                                    <h2>Snal</h2>
                                    <div className='user__box__topic'>Hi!!! I’ve been practicing jumping at home and...</div>
                                    <div className='inbox__ellipse'>
                                        <div className='inbox__number'>1</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to ='/message'>
                            <div className='user__box'>
                                <img src={beaProfile} className="user__box__icon"/>
                                <div className='user__box__info'>
                                    <h2>Bea</h2>
                                    <div className='user__box__topic'>Thanks for today, are we meeting at the same...</div>
                                </div>   
                            </div>
                        </Link>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inbox;