import React from 'react';
import Bar from './Bar';

import { Link } from "react-router-dom";

const RequestSession = () => {
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <h1>Request Session</h1>
                        <hr />
                        <div className='new__session__container'>
                            <div className='new__session__labels'>
                                <p>Date</p>
                                <p>Preferred Time</p>
                                <p>Alt. Time Range 1</p>
                                <p>Message</p>
                            </div>
                            <form className="new__session__form">
                                <input type="date" name="date"/><br/>
                                <input type="time" name="starttime0"/>
                                to
                                <input type="time" name="endtime0"/><br/>
                                <input type="time" name="starttime1"/>
                                to
                                <input type="time" name="endtime1"/>
                                <span className='subtext'>+ Add alternative time range...</span><br/>
                                <textarea name="message"></textarea><br/>
                                <input type="submit" className="submit__button" value="Request Session"/>
                            </form>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequestSession;