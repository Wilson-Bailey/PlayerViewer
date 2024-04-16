// Players.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/playersPage.css";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayersData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/players");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayersData();
  }, []);

  const handlePlayerContainerClick = (player) => {
    setSelectedPlayer(player === selectedPlayer ? null : player);
  };

  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/players">NBA Center</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section className="player-hero">
          <div className="hero-content">
            <h1>NBA Center</h1>
          </div>
        </section>
        <section className="player-featured">
          <div className="player-container">
            {players.map((player) => (
              <div
                key={player.id}
                className={`playerCard clickable ${
                  selectedPlayer === player ? "flip" : ""
                }`}
                onClick={() => handlePlayerContainerClick(player)}
              >
                <div className="playerCardInner">
                  <div className="playerCardFront">
                    <img src={player.image} alt={player.name} />
                    <h1 className="playerCard-title">{player.name}</h1>
                    <p>
                      <strong>Team:</strong> {player.team}
                    </p>
                  </div>
                  <div className="playerCardBack">
                    <h2>Career Stats</h2>
                    <ul>
                      {Object.entries(player.careerStats).map(
                        ([key, value]) => (
                          <li key={key}>
                            <strong>{key}:</strong> {value[0]}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="videos">
          <h2>Recent Highlights</h2>
          <div className="video-container">
            {/* Add your video components here */}
            {/* Example: */}
            <div className="video-card">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/iPUrK8VBBAI?si=Mzgo5Db_GfyEDZto"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video-card">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/CRyPoqFuKUs?si=8nepHmEGGqQLHVGW&amp;start=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video-card">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tDAwFVT8zKs?si=BE-8Sn4RnbkA_k-6&amp;start=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            {/* Add more video cards as needed */}
          </div>
        </section>
      </main>
      <footer className="footer">
  <div className="footer-content">
    <div className="footer-column">
      <div className="footer-item">
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida elit ac nibh euismod, vel fringilla ligula tempor.</p>
      </div>
    </div>
    <div className="footer-column">
      <div className="footer-item">
        <h3>Contact Us</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
    </div>
    <div className="footer-column">
      <div className="footer-item">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright">
    <p>&copy; 2024 SportsHub. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default Players;
