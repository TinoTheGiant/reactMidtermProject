import React from 'react';
import './App.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
      <img src="/icons/icons144.png" alt="Manchester United FC Logo" className="logo-image" />
        <h1>Manchester United FC Past and Present</h1>
      </div>
      <nav className="nav">
        <ul>
            <li><a href="#players">Current Players</a></li>
            <li><a href="#legends">Legends</a></li>
            <li><a href="#fixtures">Fixtures</a></li>
        </ul>
      </nav>
    </header>
  );
}