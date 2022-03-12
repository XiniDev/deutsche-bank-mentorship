import React, { FC, useEffect } from 'react';
import Bar from './Bar';

import Alert from '@mui/material/Alert';
import $ from 'jquery';

const Feedback: FC = () => {
    useEffect(() => {
        $(function() {
            $(".submit__button").on("click", function() {
                $('#feedback').trigger("reset");
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
                                    <input type="text" name="title"/><br/>
                                    <textarea name="message"></textarea><br/>
                                    <input type="checkbox" name="anon"/><br/>
                                </form>
                            </div>
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