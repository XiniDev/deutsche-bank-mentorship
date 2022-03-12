import React, {FC, useEffect} from 'react';
import Bar from './Bar';

import { Link } from "react-router-dom";
import $ from 'jquery';

const EditMilestones: FC = () => {


    useEffect(() => {
        $(function() {
            $(".add__milestone__button").on("click", function() {
                var newMilestone = $('#newmilestone').val();
                $('#newmilestone').val('');
                $('#new__text').html("" + newMilestone);
                $("#new__milestone").css("display", "flex");
            });
        });
        $(function() {
            $("#del__button").on("click", function() {
                $("#new__milestone").css("display", "none");
            });
        });
    }, []);

    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>

                        <Link to="/mentor">
                            <div className='back__button'>&#171; BACK</div>
                        </Link>

                        <h1>Edit Milestones</h1>
                        <hr />
                        <div className='milestones__edit'>

                            <div className='milestone__edit'>
                                <p>Make 10 sketches</p>
                                <div className='delete__milestone__button'>&#10006; Delete</div>
                            </div>
                            <div className='milestone__edit'>
                                <p>Make 5 oil paintings</p>
                                <div className='delete__milestone__button'>&#10006; Delete</div>
                            </div>
                            <div className='milestone__edit'>
                                <p>Hold small exhibition at office</p>
                                <div className='delete__milestone__button'>&#10006; Delete</div>
                            </div>
                            <div className='milestone__edit' id='new__milestone'>
                                <p id='new__text'></p>
                                <div className='delete__milestone__button' id='del__button'>&#10006; Delete</div>
                            </div>

                            <div className='milestone__add'>
                                <p>New Milestone: </p>
                                <input type='text' id='newmilestone'></input>
                                <div className='add__milestone__button'>Add</div>
                            </div>

                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditMilestones;