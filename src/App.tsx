import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './routes/Header';
import Login from './routes/Login';
import Register from './routes/Register';
import Profile from './routes/Profile';
import Mentees from './routes/Mentees';
import Mentee from './routes/Mentee';
import Error from './routes/Error';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/mentees" element={<Mentees/>}/>
                    <Route path="/mentee" element={<Mentee/>}/>
                    <Route element={<Error/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;