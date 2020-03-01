const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  console.log('Hello from another middleware')
  return res.status(200).send('<form action="/admin/add-product" method="post"><input type="text" name="title"><button type="submit">Add a item you bloody bastard.</button></form>')
})

router.post('/add-product', (req,res) => {
  console.log(req.body);
  return res.redirect('/');
})

module.exports = router;

