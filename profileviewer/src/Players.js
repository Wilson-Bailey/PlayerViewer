import React, { useState, useEffect } from "react";
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
    <div>
      <div className="player-container">
        {players.map((player) => (
          <div
            key={player.id}
            className={`playerContainer clickable ${
              selectedPlayer === player ? "flip" : ""
            }`}
            onClick={() => handlePlayerContainerClick(player)}
          >
            <div className="playerContainerInner">
              <div className="playerContainerFront">
                {player.image && <img src={player.image} alt={player.name} />}
                <h1 className="playerContainer-title">{player.name}</h1>
                <p>
                  <strong>Team:</strong> {player.team}
                </p>
              </div>
              <div className="playerContainerBack">
                <h2>Career Stats</h2>
                <ul>
                  <li>
                    <strong>G:</strong> {player.careerStats.G[0]}
                  </li>
                  <li>
                    <strong>PTS:</strong> {player.careerStats.PTS[0]}
                  </li>
                  <li>
                    <strong>TRB:</strong> {player.careerStats.TRB[0]}
                  </li>
                  <li>
                    <strong>AST:</strong> {player.careerStats.AST[0]}
                  </li>
                  <li>
                    <strong>FG%:</strong> {player.careerStats["FG%"][0]}
                  </li>
                  <li>
                    <strong>FG3%:</strong> {player.careerStats["FG3%"][0]}
                  </li>
                  <li>
                    <strong>FT%:</strong> {player.careerStats["FT%"][0]}
                  </li>
                  <li>
                    <strong>eFG%:</strong> {player.careerStats["eFG%"][0]}
                  </li>
                  <li>
                    <strong>PER:</strong> {player.careerStats.PER[0]}
                  </li>
                  <li>
                    <strong>WS:</strong> {player.careerStats.WS[0]}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
