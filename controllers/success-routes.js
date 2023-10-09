const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('success', { loggedIn: req.session.loggedIn });
});

module.exports = router;