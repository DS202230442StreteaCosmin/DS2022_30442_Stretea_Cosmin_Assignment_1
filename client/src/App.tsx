import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginScreen from './features/Login/LoginScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterScreen from './features/Register/RegisterScreen';
import AdminDashboard from './features/AdminDashboard/AdminDashboard';
import CustomerDashboard from './features/CustomerDashboard/CustomerDashboard';
import { AppRoutes } from './router/AppRoutes';
import NotFound from './features/NotFound/NotFound';

function App() {
    return (
        <Router>
            <Routes>
                <Route path={AppRoutes.BASE} element={<LoginScreen />} />
                <Route path={AppRoutes.LOGIN} element={<LoginScreen />} />
                <Route path={AppRoutes.REGISTER} element={<RegisterScreen />} />
                <Route
                    path={`${AppRoutes.ADMIN_DASHBOARD}/*`}
                    element={<AdminDashboard />}
                />
                <Route
                    path={AppRoutes.DASHBOARD}
                    element={<CustomerDashboard />}
                />
                <Route path={'*'} element={<NotFound />} />
                {/* <CustomerDashboard /> */}
                {/* <LoginScreen />
            <RegisterScreen /> */}
            </Routes>
        </Router>
    );
}

export default App;
