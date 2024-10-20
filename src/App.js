// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import UserList from './UserList';
import Registration from './Registration';
import Navbar from './Navbar';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/admin8975/UserList" element={<UserList />} />
                    <Route path="/" element={<Registration />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
