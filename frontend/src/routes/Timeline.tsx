import React, { Component } from 'react';
import Bar from './Bar';

import $ from 'jquery';

class Timeline extends Component {
    componentDidMount() {
        $(function() {
            $(".milestone__done").on("click", function() {
                console.log("I have been clicked");
                $(this).css("background-color", "#124040");
                $(this).css("border-color", "#124040");
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
                            <h1>Timeline with Bea</h1>
                            <hr />

                            <div className='milestones__container'>
                                <h2>Milestones</h2>
                                <div className='milestones__list'>

                                    <div className='milestone'>
                                        <div className='milestone__done'>Complete!</div>
                                        Make 10 sketches
                                    </div>

                                    <div className='milestone'>
                                        <div className='milestone__done'>Complete!</div>
                                        Make 5 oil paintings
                                    </div>

                                    <div className='milestone'>
                                        <div className='milestone__done'>Complete!</div>
                                        Hold small exhibition at office
                                    </div>

                                </div>
                            </div>
                            <hr />

                            <div className='timeline__container'>

                                <div className='timeline__event'>
                                    <div className='timeline__line'>
                                        <div className="dot"></div>
                                        <div className="vl"></div>
                                    </div>
                                    <div className='timeline__item'>
                                        <div className='timeline__date'>Feb 1st, 2022</div>
                                        <div className='timeline__title'>Session 2</div>
                                        <div className='timeline__content'>
                                            <p>Focus: First set of landscape sketches</p>
                                            <p>Session Feedback: Very impressive sketches, but need to focus on coherence of the whole picture and less on individual details.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='timeline__event'>
                                    <div className='timeline__line'>
                                        <div className="dot"></div>
                                        <div className="vl"></div>
                                    </div>
                                    <div className='timeline__item'>
                                        <div className='timeline__date'>Jan 25th, 2022</div>
                                        <div className='timeline__title'>Session 1</div>
                                        <div className='timeline__content'>
                                            <p>Focus: Talk about art history</p>
                                            <p>Session Feedback: Talked about famous artists and their lives. Rattus has some good knowledge and that can be further expanded by reading some of the books I recommended to them. They should also have a look art supplies that fall into their budget.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='timeline__start'>
                                    <div className='timeline__line'>
                                        <div className="dot"></div>
                                    </div>
                                    <div className='timeline__item'>
                                        <div className='timeline__date'>Jan 22nd, 2022</div>
                                        <p>Bea became Rattus's Mentor</p>
                                    </div>
                                </div>

                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timeline;