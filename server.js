const express = require('express');
const path = require('path');
const cors = require('cors')();

const createError = require('http-errors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {isHttpError} = require("http-errors");

const app = express();

app.use('/api/v1', createProxyMiddleware({
  target: 'https://evening-cove-75289-3dd3b7c57a3c.herokuapp.com/', // tu servidor de backend
  changeOrigin: true, // para manejar el CORS
  secure: true, // si tu servidor de backend usa HTTPS
  onProxyReq: function(proxyReq, req, res) {
    console.log('Original Request: ', req);
  },
  onProxyRes: function(proxyRes, req, res) {
    console.log('Proxy Response: ', proxyRes);
  }
}));
// Serve static files
app.use(express.static(path.join(__dirname, 'dist/development/browser')));
// Send all requests to index.html
// Send all requests to index.html
app.use(cors);
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/development/browser/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 3000);
