import React, { Component } from 'react';
import Bar from './Bar';
import plus from '../images/plus.svg';
import $ from 'jquery';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment"

import '../styles/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class Timetable extends Component {
    state = {
        events: [
            {
                start: moment().toDate(),
                end: moment()
                    .add(1, "days")
                    .toDate(),
                title: "Some title"
            }
        ]
    };
    
    componentDidMount() {
        $(function() {
            $(".expand__button").on("click", function() {
                console.log("I have been clicked");
                $(this).parent().parent().toggleClass("active");
                var content = $(this).parent().parent().children().last();
                if (content.css("max-height") == "0px"){
                    content.css("max-height", content.prop("scrollHeight")+ "px");
                } else {
                    content.css("max-height", "0px");
                } 
            });
        });
        $(function() {
            $(".plan__tag").on("click", function() {
                console.log("I have been clicked");
                if ($(this).hasClass("active")) {
                    $(this).css("background-color", "#9CBDBD");
                } else {
                    $(this).css("background-color", "#124040");
                }
                $(this).toggleClass("active");
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
                            <h1>Timetable</h1>
                            <hr />
                            <h2>Today's Sessions</h2>
                            <div className='session__box--timetable'>
                                <div className='session__overview'>
                                    <div className='session__info'>
                                        <div className='session__title'>
                                            Tuesday, Feburary 1st 
                                            <div className='user__box__tag'>Fine Art</div>
                                        </div>
                                        Focus: First set of landscape sketches
                                    </div>
                                    <img src={plus} className="expand__button"/>
                                </div>
                                <div className="plan__of__action">
                                    <div className='plan__tag'>Straighten back</div>
                                    <div className='plan__tag'>Jumping position</div>
                                    <div className='plan__tag'>Make the jump</div>
                                    <div className='plan__tag'>Land without fail</div>
                                </div>
                            </div>
                            <hr />
                            <div className='timetable'>
                            <Calendar
                                localizer={localizer}
                                defaultDate={new Date()}
                                defaultView="month"
                                events={this.state.events}
                                style={{ height: "600px" }}
                            />
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timetable;