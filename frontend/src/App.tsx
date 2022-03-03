import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './routes/Header';
import Login from './routes/Login';
import Register from './routes/Register';
import Profile from './routes/Profile';
import EditProfile from './routes/EditProfile';
import EditSpecialisations from './routes/EditSpecialisations';
import EditInterests from './routes/EditInterests';
import Mentees from './routes/Mentees';
import Mentee from './routes/Mentee';
import AddSession from './routes/AddSession';
import Mentors from './routes/Mentors';
import Mentor from './routes/Mentor';
import RequestSession from './routes/RequestSession';
import SuggestMentor from './routes/SuggestMentor';
import Timetable from './routes/Timetable';
import Feedback from './routes/Feedback';
import Inbox from './routes/Inbox';
import AddGroupSession from './routes/AddGroupSession';
import Timeline from './routes/Timeline';
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
                    <Route path="/editprofile" element={<EditProfile/>}/>
                    <Route path="/editspecialisations" element={<EditSpecialisations/>}/>
                    <Route path="/editinterests" element={<EditInterests/>}/>
                    <Route path="/mentees" element={<Mentees/>}/>
                    <Route path="/mentee" element={<Mentee/>}/>
                    <Route path="/addsession" element={<AddSession/>}/>
                    <Route path="/mentors" element={<Mentors/>}/>
                    <Route path="/mentor" element={<Mentor/>}/>
                    <Route path="/requestsession" element={<RequestSession/>}/>
                    <Route path="/suggestmentor" element={<SuggestMentor/>}/>
                    <Route path="/timetable" element={<Timetable/>}/>
                    <Route path="/feedback" element={<Feedback/>}/>
                    <Route path="/inbox" element={<Inbox/>}/>
                    <Route path="/addgroupsession" element={<AddGroupSession/>}/>
                    <Route path="/timeline" element={<Timeline/>}/>
                    <Route element={<Error/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;