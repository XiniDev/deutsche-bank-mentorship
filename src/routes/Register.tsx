import React from 'react';

import Cat from '../images/Cat.svg';

const Register = () => {
    return (
        <div className="frontpage">
            <div className="frontpage__block">
                <div className="frontpage__title">
                    Want to get more work on top of your job?
                </div>
                <div className="frontpage__subtitle">
                    Use our software.
                </div>
                <img src={Cat} className="frontpage__img"/>
                <div className="register__form__area">
                    <div className="register__form__title">
                        <hr/>
                        Register
                        <hr/>
                    </div>
                    <form className="register__form">
                        <div className="register__names">
                            <label>
                                <input type="text" name="fname" placeholder="First Name"/><br/>
                            </label>
                            <label>
                                <input type="text" name="lname" placeholder="Last Name"/><br/>
                            </label>
                        </div>
                        <label>
                            <input type="text" name="email" placeholder="Email Address"/><br/>
                        </label>
                        <label>
                            <input type="password" name="password" placeholder="Password"/><br/>
                        </label>
                        <label>
                            <input type="cpassword" name="cpassword" placeholder="Confirm Password"/><br/>
                        </label>
                        <input type="submit" className="submit__button" value="Register"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;