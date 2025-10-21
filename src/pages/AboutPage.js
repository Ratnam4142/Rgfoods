// src/pages/About.js
import React from 'react';
import '../css/Home.css';

export default function About() {
  return (
    <section className="about-page">
      <div className="about-inner">
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
        <div className="about-media">
          <div className="media-card">🥣</div>
        </div>
      </div>
    </section>
  );
}