import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Tracking from './Pages/Tracking/Tracking';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import About from './Pages/About/About';
import Calculate from './Pages/Calculate/Calculate';
import Order from './Pages/Order/Order';
import CreateConsignment from './Pages/CreateConsignment/CreateConsignment';
import BestPrice from './Pages/BestPrice/BestPrice';

const App = () => {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />
        <Route path="/tracking" element={token ? <Tracking /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={token ? <About /> : <Navigate to="/login" />} />
        <Route path="/calculate" element={token ? <Calculate /> : <Navigate to="/login" />} />
        <Route path="/orders" element={token ? <Order /> : <Navigate to="/login" />} />
        <Route path="/create" element={token ? <CreateConsignment /> : <Navigate to="/login" />} />
        <Route path="/bestprice" element={token ? <BestPrice /> : <Navigate to="/login" />} />

      </Routes>
    </Router>
  );
};

export default App;
