const router = require('express').Router();

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/product'); // change here for relocation
    return;
  }
  res.render('login');
});

module.exports = router;