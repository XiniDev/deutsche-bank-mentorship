import React from 'react';
import Bar from './Bar';
import rattusProfile from '../images/rattusProfile.png';
import snalProfile from '../images/snalProfile.png';
import link from '../images/link.svg';
import airplane from '../images/paper-airplane.svg';
import photo from '../images/photograph.svg';
import { Link } from 'react-router-dom';

const Inbox = () => {
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <div className='message__top__bar'>
                            <Link to="/inbox" className="back__button">
                                &#171; BACK
                            </Link>
                            <div className='message__participant'>
                                <div className='participant__info'>
                                    <div className='participant__name'>Snal</div>
                                    <div className='participant__email'>snal@rattus.com</div>
                                </div>
                                <img src={snalProfile} className='participant__icon'/>
                            </div>
                        </div>
                        <hr/>
                        <div className='message__window'>

                            <div className='message__box__1'>
                                <img src={snalProfile} className='participant__icon'/>
                                <div className='message__text__1'>Crumch crumch crumch crumch</div>
                            </div>
                            <div className='message__box__2'>
                                <div className='message__text__2'>Snif snif snif snif snif snif</div>
                                <img src={rattusProfile} className='participant__icon'/>
                            </div>
                            <div className='message__box__1'>
                                <img src={snalProfile} className='participant__icon'/>
                                <div className='message__text__1'>This isn't communication</div>
                            </div>

                            <div className='message__divider'>
                                <hr />
                                <p>01/03/2022</p>
                                <hr />
                            </div>

                            <div className='message__box__1'>
                                <img src={snalProfile} className='participant__icon'/>
                                <div className='message__text__1'>It is a new day and I am a changed man</div>
                            </div>

                        </div>
                        
                    </div>
                    <div className='message__bar'>
                        <img src={photo} className='message__button1'/>
                        <img src={link} className='message__button2'/>
                        <input type='text' className='message__area'></input>
                        <img src={airplane} className='message__button3'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inbox;