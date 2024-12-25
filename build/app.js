const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Add the /api/endpoint route
app.get('/api/endpoint', (req, res) => {
  res.status(200).send('API is working');
});
module.exports = app; // Export the app