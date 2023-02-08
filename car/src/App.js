import React from 'react'
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Screens/home'
import CarRegister from './Screens/CarRegister'
import AvailableCars from './Screens/AvailableCars'
import CarRequests from './Screens/CarRequests'
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import { Provider } from 'react-redux';
import Store from './Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApprovedCar from './Screens/ApprovedCar';


function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<CarRegister />} />
          <Route path="/availablecars" element={<AvailableCars />} />
          <Route path="/carrequests" element={<CarRequests />} />
          <Route path="/approvedcar" element={<ApprovedCar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
