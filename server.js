const path = require('path');
const cookieParser = require('cookie-parser')
const express = require('express');
const app = express();

// Use middleware to parse the cookie header (https://www.npmjs.com/package/cookie-parser)
app.use(cookieParser());

app.get('/', (req, res) => {
  console.log('cookies', req.cookies);
  res.cookie('SESSION_COOKIE', 'sessionCookie');
  res.cookie('PERMANENT_COOKIE', 'permanentCookie', { expires: new Date(Date.now() + 60000) });
  res.cookie('HTTP_ONLY_COOKIE', 'httpOnlyCookie', { expires: new Date(Date.now() + 60000), httpOnly: true });
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.get('/index.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.js'))
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(3000, () => console.log('Server listening on port 3000'));
