import React from 'react';
import './App.css';

export default function Hero({ title, subtitle, buttonText, buttonLink }) {
  return (

    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          {buttonText && buttonLink && (
            <a href={buttonLink} className="hero-button">
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}