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
        id: 1,
        name: "LeBron James",
        team: "Los Angeles Lakers",
        image:
          "https://th.bing.com/th/id/OIP.mfxJp0E0EFkhIfWDbGtQ4QAAAA?rs=1&pid=ImgDetMai",
        careerStats: {
          G: [1490],
          PTS: [27.1],
          TRB: [7.5],
          AST: [7.4],
          "FG%": [50.6],
          "FG3%": [34.8],
          "FT%": [73.6],
          "eFG%": [54.7],
          PER: [27.1],
          WS: [262.7],
        },
      },

      {
        id: 2,
        name: "Stephen Curry",
        team: "Golden State Warriors",
        image:
          "https://th.bing.com/th/id/OIP.Ayahq97Fgk6_A0PmSGzmOAAAAA?rs=1&pid=ImgDetMain",
        careerStats: {
          G: [954],
          PTS: [24.8],
          TRB: [4.7],
          AST: [6.4],
          "FG%": [47.3],
          "FG3%": [42.6],
          "FT%": [91.0],
          "eFG%": [58.2],
          PER: [23.6],
          WS: [134.8],
        },
      },

      {
        id: 3,
        name: "Anthony Davis",
        team: "Los Angeles Lakers",
        image:
          "https://d1si3tbndbzwz9.cloudfront.net/basketball/player/11373/headshot.png",
        careerStats: {
          G: [735],
          PTS: [24.1],
          TRB: [10.6],
          AST: [2.5],
          "FG%": [52.3],
          "FG3%": [29.7],
          "FT%": [79.5],
          "eFG%": [79.5],
          PER: [53.6],
          WS: [111.8],
        },
      },

      {
        id: 4,
        name: "Nikola Jokic",
        team: "Denver Nuggets",
        image:
          "https://th.bing.com/th/id/OIP.jgIuZ6dZipMsH6tpfOD6igHaFY?rs=1&pid=ImgDetMain",
        careerStats: {
          G: [674],
          PTS: [21],
          TRB: [10.7],
          AST: [6.9],
          "FG%": [55.7],
          "FG3%": [35.0],
          "FT%": [82.7],
          "eFG%": [59.2],
          PER: [28.1],
          WS: [111.4],
        },
      },

      {
        id: 5,
        name: "Joel Embiid",
        team: "Philadelphia 76ers",
        image:
          "https://th.bing.com/th/id/OIP.C-7lAKwHjRuAos2TZHhLIwAAAA?rs=1&pid=ImgDetMain",
        careerStats: {
          G: [433],
          PTS: [27.9],
          TRB: [11.2],
          AST: [3.6],
          "FG%": [50.4],
          "FG3%": [34.1],
          "FT%": [82.6],
          "eFG%": [53.6],
          PER: [28.5],
          WS: [63.5],
        },
      },

      {
        id: 6,
        name: "Giannis Antetokounmpo",
        team: "Milwaukee Bucks",
        image:
          "https://th.bing.com/th/id/R.6a61f7e4ef3008517b7816d11bab2472?rik=Y%2bRslI64E0ZScw&pid=ImgRaw&r=0",
        careerStats: {
          G: [792],
          PTS: [23.4],
          TRB: [9.8],
          AST: [4.9],
          "FG%": [54.5],
          "FG3%": [28.6],
          "FT%": [70.2],
          "eFG%": [56.7],
          PER: [25.4],
          WS: [109.3],
        },
      },

      {
        id: 7,
        name: "Shai Gilgeous-Alexander",
        team: "OKC",
        image:
          "https://th.bing.com/th/id/OIP.GepJX5WAVOr0ubxcI_si6wAAAA?rs=1&pid=ImgDetMain",
        careerStats: {
          G: [386],
          PTS: [22.8],
          TRB: [4.7],
          AST: [4.9],
          "FG%": [49.6],
          "FG3%": [34.9],
          "FT%": [85.2],
          "eFG%": [53.2],
          PER: [22.0],
          WS: [43.6],
        },
      },

      {
        id: 8,
        name: "Luka Doncic",
        team: "Dallas Mavericks",
        image:
          "https://th.bing.com/th/id/OIP.-RMktIRJrah6wzo4OLqLdwAAAA?rs=1&pid=ImgDetMain",
        careerStats: {
          G: [400],
          PTS: [28.7],
          TRB: [8.7],
          AST: [8.3],
          "FG%": [47.0],
          "FG3%": [34.7],
          "FT%": [74.7],
          "eFG%": [54.2],
          PER: [25.7],
          WS: [51.2],
        },
      },

      {
        id: 9,
        name: "Kevin Durant",
        team: "Phoenix Suns",
        image:
          "https://th.bing.com/th/id/OIP.o6C3LmvUFP4CfNbOmhGkCQAAAA?rs=1&pid=ImgDetMain",
        careerStats: {
          G: [1061],
          PTS: [27.3],
          TRB: [7.0],
          AST: [4.4],
          "FG%": [50.1],
          "FG3%": [38.7],
          "FT%": [88.4],
          "eFG%": [55.2],
          PER: [25.0],
          WS: [170.2],
        },
      },
      {
        id: 10,
        name: "Anthony Edwards",
        team: "Minnesota Timberwolves",
        image:
          "https://th.bing.com/th/id/OIP.mfxJp0E0EFkhIfWDbGtQ4QAAAA?rs=1&pid=ImgDetMai",
        careerStats: {
          G: [302],
          PTS: [22.9],
          TRB: [5.2],
          AST: [4.1],
          "FG%": [44.6],
          "FG3%": [35.3],
          "FT%": [79.3],
          "eFG%": [51.7],
          PER: [17.0],
          WS: [16.5],
        },
      },
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
