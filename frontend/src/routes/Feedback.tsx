import React from 'react';
import Bar from './Bar';

const Feedback = () => {
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <h1>Feedback</h1>
                        <hr />
                        <div className='feedback__form__container'>
                            <div className='feedback__form__labels'>
                                <p>Title</p>
                                <p>Message</p>
                                <p>Submit Anonymously</p>
                            </div>
                            <form className="feedback__form">
                                <input type="text" name="title"/><br/>
                                <textarea name="message"></textarea><br/>
                                <input type="checkbox" name="anon"/><br/>
                                <input type="submit" className="submit__button" value="Submit Feedback"/>
                            </form>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;