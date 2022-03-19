const logger = require("../config/logger");
const Board = require("../models/board/Board");
const Admin = require("../models/admin/Admin");
const { Crawler } = require('../models/admin/mainCrawler');

const output = {
    home : (req, res) => {
        logger.info("GET /home 304 홈 화면으로 이동");
        res.render('home');
    },

    about : (req, res) => {
        logger.info("GET /about 304 소개 화면으로 이동");
        res.render('about');
    },

    login : (req, res) => {
        logger.info("GET /login 304 로그인 화면으로 이동");
        res.render('login');
    },

    admin : async (req, res) => {
        const admin = new Admin();
        const data = await admin.list();
        
        logger.info("GET /admin 304 관리자 화면으로 이동");
        res.render('admin', {data});
    },

    admin_delete : (req, res) => { 
        const id = req.query.id;
        const admin = new Admin(); 
        admin.adminDelete(id);
        res.redirect('/admin')
    },

    admin_update : async (req, res) => {
        const id = req.query.id;
        const admin = new Admin();
        const data = await admin.updateContentGet(id);
        logger.info("GET /admin 304 관리자 화면으로 이동");
        res.render('admin_update', {data});
    },

    recruit_art_all : async (req, res) => {
        
        const id = req.query.id;
        const path = "All";
        const board = new Board();
        const data = await board.list(path, id);
        let viewEndNumber;
        let viewStartNumber;
    
        const listCount = await board.listCount(path);
        const endNum = Math.floor(listCount[0].CNT/10+1);
        
        if(id == undefined || id <= 5 ) {   
            viewStartNumber = 1;
            if(endNum < 6 ) {
                viewEndNumber = endNum
            } else {
                viewEndNumber = 5;
            }   
        } else {
            viewStartNumber = id-4
            viewEndNumber = id
        }  

        const arrayData = {data, endNum, viewStartNumber, viewEndNumber}

        logger.info("GET /recruit_art/all 304 모집공고(예술단체) 화면으로 이동");
        res.render('recruit_art_all', {arrayData});
    },

    recruit_art_orchestra : async (req, res) => {
        const id = req.query.id;
        const path = "ORCHESTRA";
        const board = new Board();
        const data = await board.list(path ,id);
        let viewEndNumber;
        let viewStartNumber;
        let endNum;

        const listCount = await board.listCount(path);
        
        if(listCount[0].CNT%10 == 0) {
            endNum  = Math.floor(listCount[0].CNT/10);
        } else {
            endNum  = Math.floor(listCount[0].CNT/10+1);
        }
        
        
        if(id == undefined || id <= 5 ) {   
            viewStartNumber = 1;
            if(endNum < 6 ) {
                viewEndNumber = endNum
            } else {
                viewEndNumber = 5;
            }   
        } else {
            viewStartNumber = id-4
            viewEndNumber = id
        }  
        const arrayData = {data, endNum, viewStartNumber, viewEndNumber}

        logger.info("GET /recruit_art/orchestra 304 모집공고(예술단체) 화면으로 이동");
        res.render('recruit_art_orchestra', {arrayData});
    },

    recruit_art_choir : async (req, res) => {
        const id = req.query.id;
        const path = "CHOIR";
        const board = new Board();
        const data = await board.list(path ,id);
        let viewEndNumber;
        let viewStartNumber;
        let endNum;
        
        const listCount = await board.listCount(path);

        if(listCount[0].CNT%10 == 0) {
            endNum  = Math.floor(listCount[0].CNT/10);
        } else {
            endNum  = Math.floor(listCount[0].CNT/10+1);
        }
        
        if(id == undefined || id <= 5 ) {   
            viewStartNumber = 1;
            if(endNum < 6 ) {
                viewEndNumber = endNum
            } else {
                viewEndNumber = 5;
            }   
        } else {
            viewStartNumber = id-4
            viewEndNumber = id
        }  
        const arrayData = {data, endNum, viewStartNumber, viewEndNumber}

        logger.info("GET /recruit_art/choir 304 모집공고(예술단체) 화면으로 이동");
        res.render('recruit_art_choir', {arrayData});
    },

    recruit_art_administration : async (req, res) => {
        const id = req.query.id;
        const path = "ADMINISTRATION";
        const board = new Board();
        const data = await board.list(path ,id);
        let viewEndNumber;
        let viewStartNumber;
        let endNum;
        
        const listCount = await board.listCount(path);

        if(listCount[0].CNT%10 == 0) {
            endNum  = Math.floor(listCount[0].CNT/10);
        } else {
            endNum  = Math.floor(listCount[0].CNT/10+1);
        }
        
        if(id == undefined || id <= 5 ) {   
            viewStartNumber = 1;
            if(endNum < 6 ) {
                viewEndNumber = endNum
            } else {
                viewEndNumber = 5;
            }   
        } else {
            viewStartNumber = id-4
            viewEndNumber = id
        }  
        const arrayData = {data, endNum, viewStartNumber, viewEndNumber}

        logger.info("GET /recruit_art/administration 304 모집공고(예술단체) 화면으로 이동");
        res.render('recruit_art_administration', {arrayData});
    },

    recruit_art_etc : async (req, res) => {
        const id = req.query.id;
        const path = "ETC";
        const board = new Board();
        const data = await board.list(path ,id);
        let viewEndNumber;
        let viewStartNumber;
        let endNum;
        
        const listCount = await board.listCount(path);

        if(listCount[0].CNT%10 == 0) {
            endNum  = Math.floor(listCount[0].CNT/10);
        } else {
            endNum  = Math.floor(listCount[0].CNT/10+1);
        }
        
        if(id == undefined || id <= 5 ) {   
            viewStartNumber = 1;
            if(endNum < 6 ) {
                viewEndNumber = endNum
            } else {
                viewEndNumber = 5;
            }   
        } else {
            viewStartNumber = id-4
            viewEndNumber = id
        }  
        const arrayData = {data, endNum, viewStartNumber, viewEndNumber}

        logger.info("GET /recruit_art/etc 304 모집공고(예술단체) 화면으로 이동");
        res.render('recruit_art_etc', {arrayData});
    },

    recruit_art_search : async (req, res) => {
        const id = req.query.id;
        const path = "All";
        const board = new Board();
        const data = await board.list(path ,id);
        let viewEndNumber;
        let viewStartNumber;
        let endNum;
        
        const listCount = await board.listCount(path);

        if(listCount[0].CNT%10 == 0) {
            endNum  = Math.floor(listCount[0].CNT/10);
        } else {
            endNum  = Math.floor(listCount[0].CNT/10+1);
        }
        
        if(id == undefined || id <= 5 ) {   
            viewStartNumber = 1;
            if(endNum < 6 ) {
                viewEndNumber = endNum
            } else {
                viewEndNumber = 5;
            }   
        } else {
            viewStartNumber = id-4
            viewEndNumber = id
        }  
        const arrayData = {data, endNum, viewStartNumber, viewEndNumber}

        logger.info("GET /recruit_art/search 304 모집공고(예술단체) 화면으로 이동");
        res.render('recruit_art_search', {arrayData});
    },


    recruit_religion : async (req, res) => {
        logger.info("GET /recruit 304 모집공고(종교) 화면으로 이동");
        res.render('recruit_religion');
    },
}

const process = { 
    admin_save : (req, res) => {
        const reqBody = req.body;
        const admin = new Admin();
        admin.adminSave(reqBody);
        res.json()
    },

    admin_crawling : async (req, res) => {
        const data = await Crawler();
        const admin = new Admin();
        admin.adminInit();
        admin.adminCrawling(data);
        res.json()
    },
    
    admin_update_save : (req, res) => {
        const reqBody = req.body;
        const admin = new Admin();
        admin.updateContentSave(reqBody);
        res.redirect('/admin')
    },
}


module.exports = {
    output,
    process
}