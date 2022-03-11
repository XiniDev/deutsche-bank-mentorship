import React, { FC, useState, useEffect } from 'react';
import Bar from './Bar';
import plus from '../images/plus.svg';
import $ from 'jquery';

import {useCookies} from 'react-cookie';
import APIService from '../APIService';

import { Calendar, dateFnsLocalizer, Event } from 'react-big-calendar';
import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop';

import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import isSameDay from 'date-fns/isSameDay'

import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/react-big-calendar.css';

const Timetable: FC = () => {
    useEffect(() => {
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
    }, []);

    const [userID, setID] = useState<any>([])
    const [eventsDB, setEventsDB] = useState<any>([])

    const [token] = useCookies(['mytoken'])

    useEffect(() => {
        APIService.getUserID(`${token['mytoken']}`,token['mytoken']).then(resp => setID(resp.user))
        APIService.getEvents(token['mytoken']).then(resp => setEventsDB(APIService.GetGroupByID(userID, resp, "mentorID")))
    }, [userID])

    const [events, setEvents] = useState<Event[]>([]);
    const [eventsToday] = useState<any[]>([]);

    useEffect(() => {
        for (let i = 0; i < eventsDB.length; i++) {
            const newEvent = {
                title: eventsDB[i].topic,
                start: new Date(eventsDB[i].start_time),
                end: new Date(eventsDB[i].end_time),
            }
            events.push(newEvent as Event)
            if (isSameDay(new Date(eventsDB[i].start_time), new Date())) eventsToday.push(eventsDB[i])
        }
    }, [eventsDB])

    const today = format(new Date(), "EEEE, LLLL do")

    const locales = {
        'en-US': enUS,
    }

    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek: () => {
			return startOfWeek(new Date(), { weekStartsOn: 1 });
		},
        getDay,
        locales,
    })
    const DnDCalendar = withDragAndDrop(Calendar as any)

    const onEventResize: withDragAndDropProps['onEventResize'] = data => {
        const { start, end } = data;
    
        setEvents(currentEvents => {
            const firstEvent = {
                start: new Date(start),
                end: new Date(end),
            }
            return [...currentEvents, firstEvent]
        })
    };
    
    const onEventDrop: withDragAndDropProps['onEventDrop'] = data => {
        console.log(data);
    };
    
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
                                        {today}
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
                            <DnDCalendar
                                defaultView='month'
                                events={events}
                                localizer={localizer}
                                onEventDrop={onEventDrop}
                                onEventResize={onEventResize}
                                resizable
                                messages={{
                                    date: 'Date',
                                    time: 'Time',
                                    event: 'Event',
                                    allDay: 'All Day',
                                    week: 'Week',
                                    work_week: 'Work Week',
                                    day: 'Day',
                                    month: 'Month',
                                    previous: 'Back',
                                    next: 'Next',
                                    yesterday: 'Yesterday',
                                    tomorrow: 'Tomorrow',
                                    today: 'Today',
                                    agenda: 'Agenda',
                                    noEventsInRange: 'There are no events in this range.',
                                    showMore: total => `+${total} more`,
                                }}
                                style={{ height: '600px' }}
                            />
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timetable;