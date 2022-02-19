import React from 'react';
import Bar from './Bar';
import rattusProfile from '../images/rattusProfile.png';

const Profile = () => {
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <h1>My Profile</h1>
                        <hr />
                        <div className='profile__overview'>
                            <img src={rattusProfile} className="profile__picture"/>
                            <div className='profile__info'>
                                <h1>Rattus Rattus</h1>
                                <hr />
                                <div className='profile__title'>CEO (Cheese Executive Officer)</div>
                                <div className='profile__email'>rattus.rattus@rattus.com</div>
                            </div>
                        </div>
                        <hr />
                        <h2>Specialisations</h2>
                        <div className='profile__specialisations'>
                            <div className='tag__wrapper'>
                                <div className='specialisation__tag'>Jump</div>
                                <p>I am very good at jumping especially through hoops.</p>
                            </div>
                            <div className='tag__wrapper'>
                                <div className='specialisation__tag'>Cheese and Wine</div>
                                <p>I have 5+ years of experience working at a winery.</p>
                            </div>
                            <div className='tag__wrapper'>
                                <div className='specialisation__tag'>Other Things</div>
                                <p>I am also skilled at doing other things.</p>
                            </div>
                        </div>
                        <hr />
                        <h2>Interested In</h2>
                        <div className='profile__interests'>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;