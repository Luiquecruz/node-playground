const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Home page',
    anyCondition: true,
    anyArray: ['Puddin', 'Pancake', 'Pasta', 'Pizza', 'Pepperoni']
  });
});

module.exports = router;