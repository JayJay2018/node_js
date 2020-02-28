const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('Hello from middleware 1 that always runs');
  next();
})

app.use('/add-item', (req, res, next) => {
  console.log('Hello from another middleware')
  return res.status(200).send('<p>Add a item you bloody bastard.</p>')
})

app.use('/', (req, res, next) => {
  console.log('Hello from middleware 1 that always runs');
  res.status(200).send('<h2>Hi from middleware 1</h2>')
})

const server = http.createServer(app);
server.listen(4200);