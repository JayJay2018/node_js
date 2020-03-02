const express = require('express');

const router = express.Router();

const path = require('path');

const rootDir = require('../helper/path')

router.get('/', (req, res, next) => {
  console.log('Hello from middleware 1 that always runs');
  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = router;