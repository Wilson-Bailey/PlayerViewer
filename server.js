const express = require('express');
const app = express();
const path = require('path');

const publicDir = path.join(__dirname, 'public');

app.use(express.static(publicDir));

app.get('http://localhost:5000/playersData.json', (req, res) => {
  const filePath = path.join(publicDir, 'playersData.json');
  
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

// Define a route to proxy image requests
app.get('/proxy-image', async (req, res) => {
  try {
    const imageUrl = req.query.url;
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const contentType = response.headers['content-type'];
    res.set('Content-Type', contentType);
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Error fetching image');
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



