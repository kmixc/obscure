import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Moment from 'react-moment'
//components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop'

Moment.startPooledTimer(1000)


ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);
