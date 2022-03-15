const express = require('express');
const router = express.Router();

const ctrl = require('./main.ctrl');

router.get('/' , ctrl.output.home);
router.get('/about', ctrl.output.about);
router.get('/login', ctrl.output.login);
router.get('/admin', ctrl.output.admin);
router.get('/admin/update', ctrl.output.admin_update);
router.get('/recruit_art/all', ctrl.output.recruit_art_all);
router.get('/recruit_religion', ctrl.output.recruit_religion);

router.post('/admin/update_save', ctrl.process.admin_update_save);
module.exports = router;