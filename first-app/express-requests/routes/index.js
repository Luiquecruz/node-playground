const express = require('express');
const router = express.Router();

router.use(express.urlencoded());

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home page' });

  router.get('/profile/:id', (req, res, next) => {
    res.render('profile', { output: req.params.id });
  });

  router.post('/profile/submit', (req, res, next) => {
    let id = req.body.id
    res.redirect(`/profile/${id}`);
  });
});

module.exports = router;