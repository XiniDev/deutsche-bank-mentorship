import React from 'react';
import Rattus1 from './Rattus1.svg';
import Cat from './Cat.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        Mushroom was here
      </header> */}
    </div>
  );
}

export default App;

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Rattus1} alt="Rattus1"/>
        Rattus
      </div>
      <a className="header__signinup" href="">
        Register
      </a>
    </header>
  );
}

const Login = () => {
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
          <hr></hr>
          Sign In
          <hr></hr>
        </div>
          <form className="login__area__form">
            <input type="text" name="email" placeholder="Email Address"></input><br></br>
            <input type="password" name="password" placeholder="Password"></input><br></br>
            <input type="submit" className="login__area__form__submit" value="Sign In"></input>
          </form>
      </div>
    </div>
  );
}