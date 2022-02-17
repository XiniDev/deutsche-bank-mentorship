import React from 'react';

import portrait from '../portrait.svg';
import calendar from '../calendar.svg';
import chartBar from '../chartBar.svg';
import academicCap from '../academicCap.svg';
import boardlist from '../boardlist.svg';

import { Link } from "react-router-dom";

const Bar = () => {
    return (
        <div className="bar">
            <div className="bar__from__background">
            </div>
            <img src={academicCap} className="bar__from__icon1"/>
            <div className="bar__from__learning">
                Learning
                <Link to="/Learning">Sign in</Link>
            </div>
            <img src={chartBar} className="bar__from__icon2"/>
            <div className="bar__from__mentoring">
                Mentoring
                <Link to="/Mentoring">Sign in</Link>
            </div>
            <img src={calendar} className="bar__from__icon3"/>
            <div className="bar__from__timetable">
                Timetable
                <Link to="/Timetable">Sign in</Link>
            </div>
            <img src={portrait} className="bar__from__icon4"/>
            <div className="bar__from__myProfile">
                My Profile
                <Link to="/Profile">Sign in</Link>
            </div>
            <img src={boardlist} className="bar__from__icon5"/>
            <div className="bar__from__feedback">
                Feedback
                <Link to="/Feedback">Sign in</Link>
            </div>
        </div>
      );
}

export default Bar;