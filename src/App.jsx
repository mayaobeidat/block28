import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Blue from './components/blue';
import Red from './components/red';
import Home from './components/home';
import './index.css';

export default function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/">Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue/>}/>
            <Route path="/red" element={<Red/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </div>
        <div id="Footer">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/">Home</Link>
        </div>
      </div>
    </>
  )
}

