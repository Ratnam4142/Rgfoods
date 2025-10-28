// src/App.js
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Homepage';
import About from './pages/AboutPage.js';
import Menu from './pages/Menu';
import './css/Header.css';

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar container">
        <div className="logo-section">
          <Link to="/" className="logo">
            <h1>RPfoods</h1>
          </Link>
          {/* <div className="tagline">
            <span>RURAL PANTRY</span>
            <p>Missing mom's cooking? We're your food family.</p>
          </div> */}
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    // Use HashRouter to avoid server 404 on page refresh for SPA routes.
    // HashRouter keeps the route after a '#' so the server always receives the root URL.
    <HashRouter>
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
  </HashRouter>
  );
}