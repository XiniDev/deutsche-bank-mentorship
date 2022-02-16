import React from 'react';

import Cat from '../Cat.svg';

const Register = () => {
    return (
        <div className="login">
            <div className="login__title">
                Want to get more work on top of your job?
            </div>
            <div className="login__subtitle">
                Use our software.
            </div>
            <img src={Cat} className="login__img"/>
            <div className="login__area">
                <div className="login__area__title">
                    <hr/>
                    Register
                    <hr/>
                </div>
                <form className="login__area__form">
                    <label>
                        <input type="text" name="email" placeholder="Email Address"/><br/>
                    </label>
                    <label>
                        <input type="password" name="password" placeholder="Password"/><br/>
                    </label>
                    <input type="submit" className="login__area__form__submit" value="Sign In"/>
                </form>
            </div>
        </div>
    );
}

export default Register;