import React from 'react';
import Bar from './Bar';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('en-GB');
BigCalendar.momentLocalizer(moment);

const dummyEvents = [
    {
        allDay: false,
        end: new Date('December 10, 2017 11:13:00'),
        start: new Date('December 09, 2017 11:13:00'),
        title: 'hi',
    },
    {
        allDay: true,
        end: new Date('December 09, 2017 11:13:00'),
        start: new Date('December 09, 2017 11:13:00'),
        title: 'All Day Event',
    }
];

const Timetable = () => {
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <h1>Timetable</h1>
                        <hr />
                        <div style={{ height: 700 }}>
                            {/* <BigCalendar
                                events={dummyEvents}
                                step={60}
                                view='week'
                                views={['week']}
                                min={new Date(2008, 0, 1, 8, 0)} // 8.00 AM
                                max={new Date(2008, 0, 1, 17, 0)} // Max will be 6.00 PM!
                                date={new Date(2018, 0, 1)}
                            /> */}
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timetable;