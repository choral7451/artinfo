const { query } = require("../config/logger");
const logger = require("../config/logger");
const Board = require("../models/board/board");
const Admin = require("../models/admin/Admin")

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

    admin_update : async (req, res) => {
        const id = req.query.id;
        const admin = new Admin();
        const data = await admin.updateContentGet(id);
        console.log(data)
        logger.info("GET /admin 304 관리자 화면으로 이동");
        res.render('admin_update', {data});
    },

    recruit_art_all : async (req, res) => {
        
        const id = req.query.id;
        const board = new Board();
        const data = await board.list(id);
        let viewEndNumber;
        let viewStartNumber;
    
        const listCount = await board.listCount();
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

        logger.info("GET /recruit_art 304 모집공고(예술단체) 화면으로 이동");
        res.render('recruit_art_all', {arrayData});
    },

    recruit_religion : async (req, res) => {
        logger.info("GET /recruit 304 모집공고(종교) 화면으로 이동");
        res.render('recruit_religion');
    },
}

const process = { 
    admin_update_save : async (req, res) => {
        const reqBody = req.body;
        const admin = new Admin();
        const data = await admin.updateContentSave(reqBody);
        res.redirect('/admin')
    }
}


module.exports = {
    output,
    process
}