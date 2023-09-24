import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateConsignment />} />
        <Route path="/bestprice" element={<BestPrice />} />

      </Routes>
    </Router>
  );
};

export default App;
