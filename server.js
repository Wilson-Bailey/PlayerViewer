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

// Define a route to serve playersData.json
app.get("http://localhost:5000/playersData.json", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "playersData.json"));
  } catch (error) {
    console.error("Error sending file:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Define a route to proxy image requests
app.get("/proxy-image", async (req, res) => {
  try {
    const imageUrl = req.query.url;
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const contentType = response.headers["content-type"];
    res.set("Content-Type", contentType);
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).send("Error fetching image");
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
