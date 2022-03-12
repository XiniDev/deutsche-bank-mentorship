import React, { FC, useEffect } from 'react';
import Bar from './Bar';

import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import $ from 'jquery';

const AddSession: FC = () => {
    useEffect(() => {
        $(function() {
            $(".submit__button").on("click", function() {
                $('#new__session').trigger("reset");
                $(".success__message").css("display", "block");
            });
        });
    }, []);
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>

                        <Link to="/mentee">
                                <div className='back__button'>&#171; BACK</div>
                        </Link>

                        <h1>New Session with Snal</h1>
                        <hr />
                        <div className='new__session__container'>
                            <div className='success__message'>
                                <Alert severity="success">Session successfully created.</Alert>
                            </div>
                            <div className='new__session__form__container'>
                                <div className='new__session__labels'>
                                    <p>Date *</p>
                                    <p>Time *</p>
                                    <p>Topic *</p>
                                </div>
                                <form className="new__session__form" id="new__session">
                                    <input type="date" name="date"/><br/>
                                    <input type="time" name="starttime"/>
                                    to
                                    <input type="time" name="endtime"/><br/>
                                    <select name="topic">
                                        <option label=" "></option>
                                        <option value="1">Jump</option>
                                        <option value="2">Cheese and Wine</option>
                                    </select><br/>
                                </form>
                            </div>
                            <div className='submit__button'>Add Session</div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddSession;