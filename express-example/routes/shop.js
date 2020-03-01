const express = require('express');

const router = require('router');

router.use('/', (req, res, next) => {
  console.log('Hello from middleware 1 that always runs');
  res.status(200).send('<h2>Hi from middleware 1</h2>')
})

module.exports = router;