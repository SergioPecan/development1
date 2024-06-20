const express = require('express');
const path = require('path');
const cors = require('cors')();
const app = express();
const createError = require('http-errors');
// Serve static files
app.use(express.static(path.join(__dirname, 'dist/development/browser')));
// Send all requests to index.html
// Send all requests to index.html
app.use(cors);
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/development/browser/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);
