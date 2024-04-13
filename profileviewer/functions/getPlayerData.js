// functions/getPlayersData.js

exports.handler = async (event, context) => {
    try {
      const playersData = require('./playersData.json');
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playersData),
      };
    } catch (error) {
      console.error('Error getting players data:', error);
      return {
        statusCode: 500,
        body: 'Internal Server Error',
      };
    }
  };