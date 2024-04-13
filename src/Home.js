import React from "react";
import "./css/home.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Players from "./Players"; // Import Players component

const Home = () => {
  return (
    <Router>
      <div>
        <header>
          <div className="container">
            <h1>SportsTracker</h1>
            <div className="menu">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/players">Players</Link>
                  </li>
                  {/* Add more navigation links as needed */}
                </ul>
              </nav>
            </div>
            <div className="search">
              <input type="text" placeholder="Search..." />
              <button>Search</button>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/players" element={<Players />} />
          <Route path="/" element={<HomeContent />} />
        </Routes>
        <footer>
          <div className="footer-container">
            <nav>
              <ul>
                <li>Contact: wilsonbailey88@gmail.com</li>
                <li>Phone: (423) 440-7430</li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </Router>
  );
};

const HomeContent = () => {
  return (
    <div>
      <h2 className="latest-news">Latest News</h2>
      <div className="card-container">
        <div className="card card-1">
          <div className="card-img"></div>
          <a href="#" className="card-link">
            <div className="card-img-hovered"></div>
          </a>
          <div className="card-info">
            <div className="card-about"></div>
            <h1 className="card-title">Shohei Ohtani Gambling Scandal</h1>
          </div>
        </div>

        <div className="card card-2">
          <div className="card-img"></div>
          <a href="#" className="card-link">
            <div className="card-img-hovered"></div>
          </a>
          <div className="card-info">
            <div className="card-about"></div>
            <h1 className="card-title">
              OJ Simpson Dies at 76 After Battle With Cancer
            </h1>
          </div>
        </div>
        <div className="card card-3">
          <div className="card-img"></div>
          <a href="#" className="card-link">
            <div className="card-img-hovered"></div>
          </a>
          <div className="card-info">
            <div className="card-about"></div>
            <h1 className="card-title">John Calipari Joins Arkansas</h1>
          </div>
        </div>
        <div className="card card-4">
          <div className="card-img"></div>
          <a href="#" className="card-link">
            <div className="card-img-hovered"></div>
          </a>
          <div className="card-info">
            <div className="card-about"></div>
            <h1 className="card-title">Iowa To Retire Caitlin Clarks Jersey</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
