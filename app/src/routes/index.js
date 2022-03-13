const express = require('express');
const router = express.Router();

const ctrl = require('./main.ctrl');

router.get('/' , ctrl.output.home);
router.get('/about', ctrl.output.about);
router.get('/login', ctrl.output.login);
router.get('/recruit_art', ctrl.output.recruit_art);
router.get('/recruit_religion', ctrl.output.recruit_religion);

router.post('/recruit_art', ctrl.process.recruit_art);

module.exports = router;