import React from 'react';

import portrait from '../images/portrait.svg';
import calendar from '../images/calendar.svg';
import chartBar from '../images/chartBar.svg';
import academicCap from '../images/academicCap.svg';
import boardList from '../images/boardList.svg';

import { Link } from "react-router-dom";

const Bar = () => {
    return (
        <div className="bar">
            <div className='bar__options__top'>
                <div className="bar__option">
                    <img src={academicCap} className="bar__icon"/>
                    <Link to="/Learning">Learning</Link>
                </div>

                <div className="bar__option">
                    <img src={chartBar} className="bar__icon"/>
                    <Link to="/Mentoring">Mentoring</Link>
                </div>

                <div className="bar__option">
                    <img src={calendar} className="bar__icon"/>  
                    <Link to="/Timetable">Timetable</Link>
                </div>
            </div>

            <div className='bar__options__bottom'>
                <div className="bar__option">
                    <img src={portrait} className="bar__icon"/>
                    <Link to="/Profile">My Profile</Link>
                </div>

                <div className="bar__option">
                    <img src={boardList} className="bar__icon"/>
                    <Link to="/Feedback">Feedback</Link>
                </div>
            </div>
        </div>
      );
}

export default Bar;