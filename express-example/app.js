const http = require('http');

const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res, next) => {
  console.log('Hello from middleware 1 that always runs');
  next();
})

app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
  return res.sendFile(path.join(__dirname, 'views', '404.html'))
})

const server = http.createServer(app);
server.listen(4200);