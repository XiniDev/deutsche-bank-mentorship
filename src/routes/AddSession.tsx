import React from 'react';
import Bar from './Bar';

import { Link } from "react-router-dom";

const AddSession = () => {
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
                        <h1>New Session with Snal</h1>
                        <hr />
                        <div className='new__session__container'>
                            <div className='new__session__labels'>
                                <p>Date</p>
                                <p>Time</p>
                                <p>Topic</p>
                            </div>
                            <form className="new__session__form">
                                <input type="date" name="date"/><br/>
                                <input type="time" name="starttime"/>
                                to
                                <input type="time" name="endtime"/><br/>
                                <select name="topic">
                                    <option value="1">Jump</option>
                                    <option value="2">Cheese and Wine</option>
                                </select><br/>
                                <input type="submit" className="submit__button" value="Create Session"/>
                            </form>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddSession;