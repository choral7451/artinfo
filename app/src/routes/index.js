const express = require('express');
const router = express.Router();

const ctrl = require('./main.ctrl');

router.get('/' , ctrl.output.home);
router.get('/about', ctrl.output.about);
router.get('/login', ctrl.output.login);
router.get('/logout', ctrl.output.logout);
router.get('/clientInfo', ctrl.output.clientInfo);
router.get('/findId', ctrl.output.findId);
router.get('/findPw', ctrl.output.findPw);
router.get('/signup', ctrl.output.signup);
router.get('/admin', ctrl.output.admin);
router.get('/admin/update', ctrl.output.admin_update);
router.get('/admin/write', ctrl.output.admin_write);
router.get('/admin/delete', ctrl.output.admin_delete);
router.get('/recruit_art/all', ctrl.output.recruit_art_all);
router.get('/recruit_art/orchestra', ctrl.output.recruit_art_orchestra);
router.get('/recruit_art/choir', ctrl.output.recruit_art_choir);
router.get('/recruit_art/administration', ctrl.output.recruit_art_administration);
router.get('/recruit_art/etc', ctrl.output.recruit_art_etc);
router.get('/recruit_art/search', ctrl.output.recruit_art_search);
router.get('/recruit_religion/content', ctrl.output.recruit_religion_content);
router.get('/recruit_religion/all', ctrl.output.recruit_religion_all);
router.get('/recruit_religion/conductor', ctrl.output.recruit_religion_conductor);
router.get('/recruit_religion/solists', ctrl.output.recruit_religion_solists);
router.get('/recruit_religion/accompanist', ctrl.output.recruit_religion_accompanist);
router.get('/recruit_religion/write', ctrl.output.recruit_religion_write);
router.get('/recruit_religion/update', ctrl.output.recruit_religion_update);
router.get('/robots.txt', ctrl.output.robots);
router.get('*', ctrl.output.error)

router.post('/login_check', ctrl.process.login_check);
router.post('/findId', ctrl.process.findId);
router.post('/findPw', ctrl.process.findPw);
router.post('/clientInfoUpdate', ctrl.process.clientInfoUpdate);
router.post('/signupGet', ctrl.process.signupGet);
router.post('/signup_do', ctrl.process.signup_do);
router.post('/signup_checkId', ctrl.process.signup_checkId);
router.post('/admin/update_save', ctrl.process.admin_update_save);
router.post('/admin/save', ctrl.process.admin_save);
router.post('/admin/crawling', ctrl.process.admin_crawling);
router.post('/admin_write', ctrl.process.admin_write);
router.post('/recruit_religion/write', ctrl.process.recruit_religion_write);
router.post('/recruit_religion/delete', ctrl.process.recruit_religion_delete);
router.post('/recruit_religion/update', ctrl.process.recruit_religion_update);

module.exports = router;