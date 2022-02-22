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

                <Link to="/learning">
                    <div className="bar__option">
                        <img src={academicCap} className="bar__icon"/>
                        Learning
                    </div>
                </Link>

                <Link to="/mentees">
                    <div className="bar__option">
                        <img src={chartBar} className="bar__icon"/>
                        Mentoring
                    </div>
                </Link>

                <Link to="/timetable">
                    <div className="bar__option">
                        <img src={calendar} className="bar__icon"/>
                        Timetable
                    </div>
                </Link>

            </div>

            <div className='bar__options__bottom'>

                <Link to="/profile">
                    <div className="bar__option">
                        <img src={portrait} className="bar__icon"/>
                        My Profile
                    </div>
                </Link>

                <Link to="/feedback">
                    <div className="bar__option">
                        <img src={boardList} className="bar__icon"/>
                        Feedback
                    </div>
                </Link>
                
            </div>
        </div>
      );
}

export default Bar;