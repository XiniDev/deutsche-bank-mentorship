import React, { Component } from 'react';
import Bar from './Bar';
import rattusProfile from '../images/rattusProfile.png';
import snalProfile from '../images/snalProfile.png';
import link from '../images/link.svg';
import airplane from '../images/paper-airplane.svg';
import photo from '../images/photograph.svg';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import $ from 'jquery';

class Inbox extends Component {

    componentDidMount() {
        $(function() {
            $(".message__button3").on("click", function() {
                console.log("I have been clicked");
                $(':input','#typing__area')
                .not(':button, :submit, :reset, :hidden')
                .val('')
                .prop('checked', false)
                .prop('selected', false);
                var box1 = document.getElementById("hidden__message1");
                var box2 = document.getElementById("hidden__message2");
                var typing = document.getElementById("message__typing");

                var dot1 = document.getElementById("dot1");
                var dot2 = document.getElementById("dot2");
                var dot3 = document.getElementById("dot3");

                box1!.style.visibility = "visible";
                setTimeout(() => {typing!.style.visibility = "visible"}, 1000);

                setTimeout(() => {dot1!.style.visibility = "visible"}, 1000);
                setTimeout(() => {dot2!.style.visibility = "visible"}, 1500);
                setTimeout(() => {dot3!.style.visibility = "visible"}, 2000);

                setTimeout(() => {dot2!.style.visibility = "hidden"}, 2500);
                setTimeout(() => {dot3!.style.visibility = "hidden"}, 2500);

                setTimeout(() => {dot2!.style.visibility = "visible"}, 3000);

                setTimeout(() => {typing!.style.display = "none"}, 3500);
                setTimeout(() => {box2!.style.visibility = "visible"}, 3500);
            });
        });
    }

    render() {
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
                                <div className='message__box__2' id="hidden__message1">
                                    <div className='message__text__2'>Snif snif snif snif snif snif</div>
                                    <img src={rattusProfile} className='participant__icon'/>
                                </div>
                                <div className='message__box__1' id="message__typing">
                                    <img src={snalProfile} className='participant__icon'/>
                                    <div className='message__text__1'><span id='dot1'>&#8226;&nbsp;</span><span id='dot2'>&#8226;&nbsp;</span> <span id='dot3'>&#8226;</span></div>
                                </div>
                                <div className='message__box__1' id="hidden__message2">
                                    <img src={snalProfile} className='participant__icon'/>
                                    <div className='message__text__1'>This isn't communication</div>
                                </div>

                                {/* <div className='message__divider'>
                                    <hr />
                                    <p>01/03/2022</p>
                                    <hr />
                                </div>

                                <div className='message__box__1'>
                                    <img src={snalProfile} className='participant__icon'/>
                                    <div className='message__text__1'>It is a new day and I am a changed man</div>
                                </div> */}

                            </div>
                            
                        </div>
                        <div className='message__bar' id='typing__area'>
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
}

export default Inbox;