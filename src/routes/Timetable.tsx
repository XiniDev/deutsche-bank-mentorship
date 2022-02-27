import React from 'react';
import Bar from './Bar';

const Timetable = () => {
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <h1>Timetable</h1>
                        <hr />
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timetable;