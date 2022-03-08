import React from 'react';
import Bar from './Bar';

const EditMilestones = () => {
    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>
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