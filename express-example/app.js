const http = require('http');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use('/', (req, res, next) => {
  console.log('Hello from middleware 1 that always runs');
  next();
})

app.get('/add-product', (req, res, next) => {
  console.log('Hello from another middleware')
  return res.status(200).send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Add a item you bloody bastard.</button></form>')
})

app.post('/product', (req,res) => {
  console.log(req.body);
  return res.redirect('/');
})
app.use('/', (req, res, next) => {
  console.log('Hello from middleware 1 that always runs');
  res.status(200).send('<h2>Hi from middleware 1</h2>')
})

const server = http.createServer(app);
server.listen(4200);