// functions/getPlayersData.js

const fs = require("fs");
const path = require("path");

exports.handler = async (event, context) => {
  try {
    // Read the playersData.json file
    const playersDataPath = path.resolve(__dirname, "playersData.json");
    const playersData = fs.readFileSync(playersDataPath, "utf8");

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: playersData,
    };
  } catch (error) {
    console.error("Error getting players data:", error);
    return {
      statusCode: 500,
      body: "Internal Server Error",
    };
  }
};
