import React from 'react';
import Bar from './Bar';
import snalProfile from '../images/snalProfile.png';
import beaProfile from '../images/beaProfile.png';

import { Link } from "react-router-dom";

const NewMentor = () => {
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
                            <div className='request__mentor__button'>Request to be Mentor</div>
                        </div>
                        <hr />
                        
                        <h2>Specialisations</h2>

                        <div className='profile__specialisations'>
                            <div className='tag__wrapper'>
                                <div className='specialisation__tag'>Fine Art</div>
                                <p>Years of experience teaching at AA (Anthophila Arts).</p>
                            </div>
                            <div className='tag__wrapper'>
                                <div className='specialisation__tag'>Cooking</div>
                                <p>I can tell you the names of at least 7 dishes.</p>
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