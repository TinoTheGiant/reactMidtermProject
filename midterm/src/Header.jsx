import React from 'react';
import './App.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Manchester United FC</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#legends">Legends</a></li>
          <li><a href="#players">Current Players</a></li>
        </ul>
      </nav>
    </header>
  );
}