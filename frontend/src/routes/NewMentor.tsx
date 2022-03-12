import React, { FC, useEffect } from 'react';
import Bar from './Bar';
import snalProfile from '../images/snalProfile.png';
import beaProfile from '../images/beaProfile.png';
import rattusProfile from '../images/rattusProfile.png';
import { Link } from "react-router-dom";
import APIService from '../APIService';

import Alert from '@mui/material/Alert';
import $ from 'jquery';

const NewMentor: FC = () => {

    let menteeID = 7
    let mentorID = 1
    const mentorBtn = async (e: React.FormEvent<HTMLInputElement>) => {
        APIService.RegisterPairing({menteeID,mentorID})
    }

    useEffect(() => {
        $(function() {
            $(".request__mentor__button").on("click", function() {
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

                        <Link to="/suggestmentor">
                        <div className='back__button'>&#171; BACK</div>
                        </Link>

                        <h1>Mentor</h1>
                        <hr />

                        <div className='mentee__box'>
                            <div className='user__info'>
                                <img src={beaProfile} className="user__box__icon"/>
                                <div className='user__box__info'>
                                    <h2>Bea</h2>
                                    <p>She/Her</p>
                                    <div className='user__box__title'>HR (Honey Resources)</div>
                                </div>
                            </div>
                            <input className='request__mentor__button' value="Request to be Mentor" onClick = {mentorBtn}  />
                        </div>

                        <div className='success__message'>
                            <Alert severity="success">Request for Bea to mentor you has been sent!</Alert>
                        </div>

                        <hr />
                        
                        <h2>Specialisations</h2>

                        <div className='profile__specialisations'>
                            <div className='tag__wrapper'>
                                <div className='specialisation__tag'>Fine Art</div>
                                <p>Studied in the Royal Arts Institution.</p>
                            </div>
                            <div className='tag__wrapper'>
                                <div className='specialisation__tag'>Flying</div>
                                <p>I mean. It just makes sense, doesn't it?</p>
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