import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './routes/Header';
import Login from './routes/Login';
import Register from './routes/Register';
import Profile from './routes/Profile';
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
                    <Route path="/Profile" element={<Profile/>}/>
                    <Route element={<Error/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;