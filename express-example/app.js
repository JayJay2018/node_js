const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Hello from middleware 1');
  next();
})

app.use((req, res, next) => {
  console.log('Hello from another middleware')
})

const server = http.createServer(app);
server.listen(4200);