const express = require('express');
const router = express.Router();
const passport = require('passport')

const { letsMakeAToken } = require('../auth/token')
const { REACT_REDIRECT } = process.env;

router.get('/google/start',
    passport.authenticate('google', {
        session: false, scope: ['openid', 'profile', 'email'] 
    }));

router.get('/google/redirect',
    passport.authenticate('google', { session: false }), (req, res) => {
        token = letsMakeAToken(req.user)
        res.redirect(REACT_REDIRECT +'?token=' + token)
    });

router.get('/secure',
    passport.authenticate(['jwt'], { session: false }),
    (req, res) => {
        res.send(req.user);
    });
module.exports = router;