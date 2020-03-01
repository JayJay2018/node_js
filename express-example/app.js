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

app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
  return res.status(404).send('<h2>Sorry, path not found</h2>')
})

const server = http.createServer(app);
server.listen(4200);