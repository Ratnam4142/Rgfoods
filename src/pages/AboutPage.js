// src/pages/About.js
import React from 'react';
import '../css/About.css'; // Link to the new CSS file

export default function About() {
  return (
    <section className="about-page">
      <div className="about-inner">
        {/* Left Section: Text Content */}
        <div className="about-text">
          <h2>Our Promise</h2>
          <p>
            We use time-tested recipes and high-quality ingredients. No artificial preservatives — just wholesome
            energy in every bite.
          </p>
          <ul className="about-list">
            <li>Small-batch handcrafted laddus</li>
            <li>Clean ingredients & minimal processing</li>
            <li>Eco-friendly packaging</li>
          </ul>
        </div>

        {/* Right Section: Media/Visuals */}
        <div className="about-media">
          <div className="media-card">
            🥣 {/* Placeholder emoji; replace with an actual image */}
          </div>
        </div>
      </div>
    </section>
  );
}