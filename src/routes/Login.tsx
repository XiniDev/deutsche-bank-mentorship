import React from 'react';

import Cat from '../Cat.svg';

const Login = () => {
    return (
        <div className="frontpage">
            <div className="frontpage__title">
                Want to get more work on top of your job?
            </div>
            <div className="frontpage__subtitle">
                Use our software.
            </div>
            <img src={Cat} className="frontpage__img"/>
            <div className="login__form__area">
                <div className="login__form__title">
                    <hr/>
                    Sign In
                    <hr/>
                </div>
                <form className="login__form">
                    <label>
                        <input type="text" name="email" placeholder="Email Address"/><br/>
                    </label>
                    <label>
                        <input type="password" name="password" placeholder="Password"/><br/>
                    </label>
                    <input type="submit" className="login__form__submit" value="Sign In"/>
                </form>
            </div>
        </div>
    );
}

export default Login;