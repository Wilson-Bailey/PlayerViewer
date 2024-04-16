// Players.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/playersPage.css";
import {
  faGithub,
  faDiscord,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
          <h2 class="h2-highlights">Recent Highlights</h2>
          <div className="video-container">
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
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-item">
              <h3>About Me</h3>
              <p class="p-footer">
                My name is Bailey I am a computer science major at ETSU, Ive
                been interested in coding for about two years now and look
                forward to see where it takes me in my life.
              </p>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-item">
              <h3>Contact Me</h3>
              <p>Email: wilsonbailey88@gmail.com</p>
              <p>Phone: (423) 440-7430</p>
              <div className="copyright">
                <p>&copy; 2024 SportsHub. All rights reserved.</p>
              </div>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-item">
              <div className="follow-section">
                <h3>Follow Me</h3>
                <div className="social-icons">
                  <a
                    href="https://github.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                  </a>
                  <a
                    href="https://discord.com/invite/your-server"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faDiscord} className="icon" />
                  </a>
                  <a
                    href="https://twitter.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                  </a>
                  <a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Players;
