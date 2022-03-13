const { query } = require("../config/logger");
const logger = require("../config/logger");
const Board = require("../models/board/board");

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

    recruit_art : (req, res) => {
        logger.info("GET /recruit_art 304 모집공고(예술단체) 화면으로 이동");
        res.render('recruit_art');
    },

    recruit_religion : async (req, res) => {
        logger.info("GET /recruit 304 모집공고(종교) 화면으로 이동");
        res.render('recruit_religion');
    },
}

const process = {
    recruit_art : async (req, res) => {    
        const type = req.body.type;
        const board = new Board();
        const data = await board.list(type);
        res.send(data);
    }
}

module.exports = {
    output,
    process
}