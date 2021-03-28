const http = require('http');
const express = require('express');
const { send } = require('process');

const app = express();

// working with route
// always running
app.use('/', (req, res, next) => {
  console.log('Always Running');
  next(); // this method allow the request to always running
});
app.use('/', (req, res, next) => {
  console.log('in another middleware');
  res.send('<h1>Hello from Express</h1>');
});

app.use('/products', (req, res, next) => {
  res.send('<h1>Hello from Products</h1>');
});

// creating Server
app.listen(5000);
