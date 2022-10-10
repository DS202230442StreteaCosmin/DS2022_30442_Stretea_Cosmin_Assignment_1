import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginScreen from './features/Login/LoginScreen';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            {/* <AdminDashboard />
            <CustomerDashboard /> */}
            <LoginScreen />
        </Router>
    );
}

export default App;
