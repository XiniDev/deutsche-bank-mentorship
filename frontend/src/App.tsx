import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './routes/Header';
import Login from './routes/Login';
import Register from './routes/Register';
import Profile from './routes/Profile';
import Mentees from './routes/Mentees';
import Mentee from './routes/Mentee';
import AddSession from './routes/AddSession';
import Mentors from './routes/Mentors';
import Mentor from './routes/Mentor';
import RequestSession from './routes/RequestSession';
import SuggestMentor from './routes/SuggestMentor';
import Timetable from './routes/Timetable';
import Inbox from './routes/Inbox';
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
                    <Route path="/addsession" element={<AddSession/>}/>
                    <Route path="/mentors" element={<Mentors/>}/>
                    <Route path="/mentor" element={<Mentor/>}/>
                    <Route path="/requestsession" element={<RequestSession/>}/>
                    <Route path="/suggestmentor" element={<SuggestMentor/>}/>
                    <Route path="/timetable" element={<Timetable/>}/>
                    <Route path="/inbox" element={<Inbox/>}/>
                    <Route element={<Error/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;