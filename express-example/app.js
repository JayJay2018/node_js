const http = require('http');

const express = require('express');

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use('/', (req, res, next) => {
  console.log('Hello from middleware 1 that always runs');
  next();
})

app.use(adminRoutes);
app.use(userRoutes);

const server = http.createServer(app);
server.listen(4200);