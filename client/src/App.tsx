import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginScreen from './features/Login/LoginScreen';
import { BrowserRouter as Router } from 'react-router-dom';
import RegisterScreen from './features/Register/RegisterScreen';
import AdminDashboard from './features/AdminDashboard/AdminDashboard';
import CustomerDashboard from './features/CustomerDashboard/CustomerDashboard';

function App() {
    return (
        <Router>
            <AdminDashboard />
            {/* <CustomerDashboard /> */}
            {/* <LoginScreen />
            <RegisterScreen /> */}
        </Router>
    );
}

export default App;
