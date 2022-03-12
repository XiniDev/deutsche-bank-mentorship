import React from 'react';
import Bar from './Bar';
import snalProfile from '../images/snalProfile.png';
import beaProfile from '../images/beaProfile.png';
import rattusProfile from '../images/rattusProfile.png';
import { Link } from "react-router-dom";
import APIService from '../APIService';
const NewMentor = () => {
    let menteeID = 6
    let mentorID = 1
    const mentorBtn = async (e: React.FormEvent<HTMLInputElement>) => {
        APIService.RegisterPairing({menteeID,mentorID})
    }
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
                                <img src={rattusProfile} className="user__box__icon"/>
                                <div className='user__box__info'>
                                    <h2>Rattus Cattus</h2>
                                    <p>He/Him</p>
                                    <div className='user__box__title'>HR (Honey Resources)</div>
                                </div>
                            </div>
                            <input className='request__mentor__button' value="Request to be Mentor" onClick = {mentorBtn}  />
                        </div>
                        <hr />
                        
                        <h2>Specialisations</h2>

                        <div className='profile__specialisations'>
                            <div className='tag__wrapper'>
                                <div className='specialisation__tag'>Jumping</div>
                                <p>Jumping is the act of elevating ones-self</p>
                            </div>
                            <div className='tag__wrapper'>
                                <div className='specialisation__tag'>Climbing</div>
                                <p>Climbing entails prolonged sticky jumping</p>
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