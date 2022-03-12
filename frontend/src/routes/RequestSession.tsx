import React, { FC, useEffect } from 'react';
import Bar from './Bar';

import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import $ from 'jquery';

const RequestSession: FC = () => {
    useEffect(() => {
        $(function() {
            $(".submit__button").on("click", function() {
                $('#request__session').trigger("reset");
                $(".success__message").css("display", "block");
            });
        });
    }, []);
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>

                        <Link to="/mentor">
                                <div className='back__button'>&#171; BACK</div>
                        </Link>

                        <h1>Request Session</h1>
                        <hr />
                        <div className='new__session__container'>
                            <div className='success__message'>
                                <Alert severity="success">Session successfully requested.</Alert>
                            </div>
                            <div className='new__session__form__container'>
                                <div className='new__session__labels'>
                                    <p>Date</p>
                                    <p>Preferred Time</p>
                                    <p>Alt. Time Range 1</p>
                                    <p>Message</p>
                                </div>
                                <form className="new__session__form" id="request__session">
                                    <input type="date" name="date"/><br/>
                                    <input type="time" name="starttime0"/>
                                    to
                                    <input type="time" name="endtime0"/><br/>
                                    <input type="time" name="starttime1"/>
                                    to
                                    <input type="time" name="endtime1"/>
                                    <span className='subtext'>+ Add alternative time range...</span><br/>
                                    <textarea name="message"></textarea><br/>
                                </form>
                            </div>
                            <div className='submit__button'>Request Session</div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequestSession;