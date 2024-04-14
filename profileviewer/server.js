const express = require("express");
const path = require("path");
const axios = require("axios");
const cors = require("cors"); // Import the cors middleware

const app = express();

// Use the cors middleware to allow requests from all origins
app.use(cors());

// Define the directory where your static files are located
const publicDir = path.join(__dirname, "public");
app.use(express.static(publicDir));



// Define a route to get all players
app.get("/api/players", (req, res) => {
  try {
    const allPlayersData = [
      {
        "id": 1,
        "name": "LeBron James",
        "team": "Los Angeles Lakers",
        "image": "https://th.bing.com/th/id/OIP.mfxJp0E0EFkhIfWDbGtQ4QAAAA?rs=1&pid=ImgDetMai",
        "careerStats": {
          "G": [1490],
          "PTS": [27.1],
          "TRB": [7.5],
          "AST": [7.4],
          "FG%": [50.6],
          "FG3%": [34.8],
          "FT%": [73.6],
          "eFG%": [54.7],
          "PER": [27.1],
          "WS": [262.7]
        }
      },
      // Add other player data here
    ];
    res.json(allPlayersData);
  } catch (error) {
    console.error("Error sending response:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
