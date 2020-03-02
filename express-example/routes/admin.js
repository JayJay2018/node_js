const express = require('express');

const router = express.Router();

const path = require('path')

const rootDir = require('../helper/path');

router.get('/add-product', (req, res, next) => {
  console.log('Hello from another middleware')
  return res.status(200).sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

router.post('/add-product', (req,res) => {
  console.log(req.body);
  return res.redirect('/');
})

module.exports = router;

