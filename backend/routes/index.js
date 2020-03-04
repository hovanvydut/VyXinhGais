const express = require('express');
const router = express.Router();

const authMiddleware = require('./../middleware/auth.middleware');

router.get('/', authMiddleware.vefifyAuth, function(req, res, next) {
    const name = res.locals.user.name;
    res.render('index', { title: name });
});

module.exports = router;
