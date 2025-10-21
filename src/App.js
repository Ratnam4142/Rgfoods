// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Homepage';
import About from './pages/AboutPage.js';
import Menu from './pages/Menu';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h2>RPfoods</h2>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}