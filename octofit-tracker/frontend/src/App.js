import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from '../public/octofitapp-small.svg';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="OctoFit Logo" />
            OctoFit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {/* Add more nav items as needed */}
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <h1 className="mb-4">OctoFit Tracker Frontend</h1>
        <Routes>
          <Route path="/" element={
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Welcome to OctoFit Tracker!</h2>
                <p className="card-text">Track your fitness, join teams, and compete on the leaderboard.</p>
                <a href="#" className="btn btn-primary">Get Started</a>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
