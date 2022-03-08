import React from 'react';
import Bar from './Bar';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

const RateMentor = () => {

    const [value, setValue] = React.useState<number | null>(2);

    return (
        <div className='background'>
            <div className='container'>
                <Bar />
                <div className='content__background'>
                    <div className='content'>

                        <Link to="/mentor">
                            <div className='back__button'>&#171; BACK</div>
                        </Link>
                            
                        <h1>Rate This Mentor</h1>
                        <hr />
                        <div className='feedback__form__container'>
                            <div className='feedback__form__labels'>
                                <p>Rating</p>
                                <p>Description</p>
                            </div>
                            <form className="rating__form">
                                <Box
                                    sx={{
                                        '& > legend': { mt: 2 },
                                    }}
                                    >
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                        setValue(newValue);
                                        }}
                                    />
                                </Box>
                                <textarea name="message"></textarea><br/>
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

export default RateMentor;