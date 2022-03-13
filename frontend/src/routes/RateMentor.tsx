import React, { FC, useEffect } from 'react';
import Bar from './Bar';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import $ from 'jquery';

const RateMentor: FC = () => {

    const [value, setValue] = React.useState<number | null>(2);

    useEffect(() => {
        $(function() {
            $(".submit__button").on("click", function() {
                $('#feedback').trigger("reset");
                $(".success__message").css("display", "block");
            });
        });
    }, []);

    let mentorID = document.location.search.substring(1).split("=")[1]

    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>

                        <Link to={"/mentor?mentorID=" + mentorID}>
                            <div className='back__button'>&#171; BACK</div>
                        </Link>
                            
                        <h1>Rate This Mentor</h1>
                        <hr />
                        <div className='feedback__container'>
                            <div className='success__message'>
                                <Alert severity="success">Feedback successfully submitted.</Alert>
                            </div>
                            <div className='feedback__form__container'>
                                <div className='feedback__form__labels'>
                                    <p>Rating *</p>
                                    <p>Comment</p>
                                </div>
                                <form className="rating__form" id="feedback">
                                    <Box
                                        sx={{
                                            '& > legend': { mt: 2 },
                                        }}
                                        >
                                        <Rating
                                            name="simple-controlled"
                                            id="rating"
                                            value={value}
                                            onChange={(event, newValue) => {
                                            setValue(newValue);
                                            }}
                                        />
                                    </Box>
                                    <textarea name="message"></textarea><br/>
                                </form>
                            </div>
                            <div className='submit__button'>Submit Feedback</div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RateMentor;