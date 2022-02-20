import React from 'react';
import Bar from './Bar';
import beeProfile from '../images/beeProfile.png';

const Inbox = () => {
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <h1>Messages</h1>
                    <hr/>
                    <div className='Inbox__box1'>
                        <img src={snalProfile} className=""/>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    );
}

export default Inbox;