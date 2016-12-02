const path = require('path');
const express = require('express');
const app = express();

// app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.get('/index.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.js'))
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(3000, () => console.log('Server listening on port 3000'));
