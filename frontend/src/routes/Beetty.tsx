import React, { FC, useEffect } from 'react';
import Bar from './Bar';
import snalProfile from '../images/snalProfile.png';
import beaProfile from '../images/beaProfile.png';

import Alert from '@mui/material/Alert';
import $ from 'jquery';

import { Link } from "react-router-dom";

const NewMentor: FC = () => {

    useEffect(() => {
        $(function() {
            $(".request__mentor__button").on("click", function() {
                $(".failure__message").css("display", "block");
            });
        });
    }, []);

    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>

                        <Link to="/suggestmentor">
                        <div className='back__button'>&#171; BACK</div>
                        </Link>

                        <h1>Mentor</h1>
                        <hr />

                        <div className='mentee__box'>
                            <div className='user__info'>
                                <img src={beaProfile} className="user__box__icon"/>
                                <div className='user__box__info'>
                                    <h2>Beetty</h2>
                                    <p>She/Her</p>
                                    <div className='user__box__title'>HR (Honey Resources)</div>
                                </div>
                            </div>
                            <input className='request__mentor__button' value="Request to be Mentor"/>
                            
                        </div>

                        <div className='failure__message'>
                            <Alert severity="error">You already have a mentor!</Alert>
                        </div>

                        <hr />
                        
                        <h2>Specialisations</h2>

                        <div className='profile__specialisations'>
                            <div className='tag__wrapper'>
                                <div className='specialisation__tag'>Procrastinating</div>
                                <p>It's how I spend most of my time :)</p>
                            </div>
                            <div className='tag__wrapper'>
                                <div className='specialisation__tag'>Zooming</div>
                                <p>Zooming is like running but fancier</p>
                            </div>
                            <div className='tag__wrapper'>
                                <div className='specialisation__tag'>Jumping</div>
                                <p>Jumping is the act of elevating ones-self</p>
                            </div>
                        </div>

                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewMentor;