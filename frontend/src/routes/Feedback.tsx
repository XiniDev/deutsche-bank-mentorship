import React, { FC, useEffect } from 'react';
import Bar from './Bar';

import Alert from '@mui/material/Alert';
import $ from 'jquery';

const Feedback: FC = () => {

    useEffect(() => {
        $(function() {
            $(".submit__button").on("click", function() {

                var title = $('#title').val();
                var message = $('#message').val();

                if (!title || !message) {
                    $(".success__message").css("display", "none");
                    $(".error__message").css("display", "block");
                }
                else {
                    $('#feedback').trigger("reset");
                    $(".error__message").css("display", "none");
                    $(".success__message").css("display", "block");
                }
                
            });
        });
    }, []);

    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <h1>Feedback</h1>
                        <hr />
                        <div className='feedback__container'>

                            <div className='success__message'>
                                <Alert severity="success">Feedback successfully submitted.</Alert>
                            </div>

                            <div className='feedback__form__container'>
                                <div className='feedback__form__labels'>
                                    <p>Title *</p>
                                    <p>Message *</p>
                                    <p>Submit Anonymously</p>
                                </div>
                                <form className="feedback__form" id="feedback">
                                    <input type="text" name="title" id="title"/><br/>
                                    <textarea name="message" id="message"></textarea><br/>
                                    <input type="checkbox" name="anon"/><br/>
                                </form>
                            </div>
                            
                            <div className='error__message'>Please fill in all required fields.</div>

                            <div className='submit__button'>Submit Feedback</div>

                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;