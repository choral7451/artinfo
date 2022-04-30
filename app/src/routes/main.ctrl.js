const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

const logger = require("../config/logger");
const Board = require("../models/board/Board");
const Admin = require("../models/admin/Admin");
const Login = require("../models/login/Login");
const Member = require("../models/login/member/Member");
const Signup = require("../models/login/signup/Signup");
const Home = require("../models/home/Home");

const { Crawler } = require('../models/admin/mainCrawler');

const output = {
    home : async (req, res) => {
        const home = new Home();
        const leftData = await home.leftList();
        const rightData = await home.rightList();
        const arrayData = {leftData, rightData}

        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /home 304 홈 화면으로 이동");
            res.render('home',{login: auth.user.id, arrayData});
        } else {
            logger.info("GET /home 304 홈 화면으로 이동");
            res.render('home', {login: null, arrayData});    
        }          
    },

    about : (req, res) => {
        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /about 304 소개 화면으로 이동");
            res.render('about',{login: auth.user.id});
        } else {
            logger.info("GET /about 304 소개 화면으로 이동");
            res.render('about', {login: null});    
        }
    },

    login : (req, res) => {
        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /login 304 로그인 화면으로 이동");
            res.redirect('/');
        } else {
            logger.info("GET /login 304 로그인 화면으로 이동");
            res.render('login', {login: null });    
        }
    },

    logout : (req, res) => {   
        const auth = req.session.passport
        if(auth != undefined) {
            req.session.destroy(function(){ 
                req.session;
                res.redirect('/');
            });  
        } else {
            res.redirect('/login');
        }          
    },

    clientInfo : async (req, res) => { 
        const auth = req.session.passport

        if(auth != undefined) {
            const login = new Login();
            const data = await login.getMember(auth.user.id)

            logger.info("GET /about 304 소개 화면으로 이동");
            res.render('clientInfo',{login: auth.user.id, data});
        } else {
            res.redirect('/');    
        }           
    },

    findId : (req, res) => {   
        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /findId 304 아이디찾기 화면으로 이동");
            res.redirect('/');
        } else {
            logger.info("GET /findId 304 아이디찾기 화면으로 이동");
            res.render('findId', {login: null});    
        }        
    },

    findPw : (req, res) => {   
        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /findId 304 비밀번호 찾기 화면으로 이동");
            res.redirect('/');
        } else {
            logger.info("GET /findPw 304 비밀번호 찾기 화면으로 이동");
            res.render('findPw', {login: null});    
        }        
    },

    signup : (req, res) => {
        const auth = req.session.passport
        if(auth != undefined) {
            res.redirect('/');
        } else {
            logger.info("GET /signup 304 회원가입 화면으로 이동");
            res.render('signup');   
        }
    },

    signupCheck : (req, res) => {
        const auth = req.session.passport
        if(auth != undefined) {
            res.redirect('/');
        } else {
            logger.info("GET /signup 304 회원가입 화면으로 이동");
            res.render('signupCheck');   
        }
    },

    admin : async (req, res) => { 
        const auth = req.session.passport
 
        if(auth) {
            if(auth.user.id == "admin") {
                const admin = new Admin();
                const data = await admin.list(); 

                logger.info("GET /admin 304 관리자 화면으로 이동");
                res.render('admin', {login: auth.user.id, data});
            } else {
                res.redirect('/');
            }           
        } else {
            res.redirect('/');
        }        
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
        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /admin/update 304 관리자 화면으로 이동");
            res.render('admin_update', {login:auth.user.id, data});
        } else {
            res.redirect('/');    
        }
    },

    admin_write : async (req, res) => {
        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /admin/write 304 관리자 화면으로 이동");
            res.render('admin_write', {login:auth.user.id});
        } else {
            res.redirect('/');    
        }
    },

    recruit_art_all : async (req, res) => {
        const id = req.query.id;
        const path = "All";
        const board = new Board();
        const data = await board.list(path, id);
        let viewEndNumber;
        let viewStartNumber;
    
        const listCount = await board.listCount(path);
        const endNum = Math.ceil(listCount[0].CNT/10);
        
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

        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /recruit_art/all 304 모집공고(예술단체) 화면으로 이동");
            res.render('recruit_art_all', {login: auth.user.id, arrayData});
        } else {
            logger.info("GET /recruit_art/all 304 모집공고(예술단체) 화면으로 이동");
            res.render('recruit_art_all', {login: null, arrayData});   
        }
    },

    recruit_art_orchestra : async (req, res) => {
        const id = req.query.id;
        const path = "ORCHESTRA";
        const board = new Board();
        const data = await board.list(path ,id);
        let viewEndNumber;
        let viewStartNumber;

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

        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /recruit_art/orchestra 304 모집공고(예술단체) 화면으로 이동");
            res.render('recruit_art_orchestra', {login: auth.user.id, arrayData});
        } else {
            logger.info("GET /recruit_art/orchestra 304 모집공고(예술단체) 화면으로 이동");
            res.render('recruit_art_orchestra', {login: null, arrayData});   
        }
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

        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /recruit_art/choir 304 모집공고(예술단체) 화면으로 이동");
            res.render('recruit_art_choir', {login: auth.user.id, arrayData});
        } else {
            logger.info("GET /recruit_art/choir 304 모집공고(예술단체) 화면으로 이동");
            res.render('recruit_art_choir', {login: null, arrayData});   
        }
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

        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /recruit_art/administration 304 모집공고(예술단체) 화면으로 이동");
            res.render('recruit_art_administration', {login: auth.user.id, arrayData});
        } else {
            logger.info("GET /recruit_art/administration 304 모집공고(예술단체) 화면으로 이동");
            res.render('recruit_art_administration', {login: null, arrayData});   
        }
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

        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /recruit_art/etc 304 모집공고(예술단체) 화면으로 이동");
            res.render('recruit_art_etc', {login: auth.user.id, arrayData});
        } else {
            logger.info("GET /recruit_art/etc 304 모집공고(예술단체) 화면으로 이동");
            res.render('recruit_art_etc', {login: null, arrayData});   
        }
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

    recruit_religion_content : async (req, res) => {
        const query = req.query.id;
        const board = new Board;
        const data = await board.religionListContent(query);
 
        let content = data[0].CONTENT
        content = content.replace(/\<br\/>/g, "\r\n");

        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /recruit_religion/content 304 모집공고(종교) 화면으로 이동");
            res.render('recruit_religion_content', {login: auth.user.id, data, content });
        } else {
            logger.info("GET /recruit_religion/content 304 모집공고(종교) 화면으로 이동");
            res.render('recruit_religion_content', {login: null, data, content });   
        }
    },
 
    recruit_religion_all : async (req, res) => {
        const id = req.query.id;
        const path = "All";
        const board = new Board();
        const data = await board.religionList(path, id);
        let viewEndNumber;
        let viewStartNumber;
    
        const listCount = await board.religionListCount(path);
        const endNum = Math.ceil(listCount[0].CNT/10);
        
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
        
        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /recruit_religion/all 304 모집공고(종교) 화면으로 이동");
            res.render('recruit_religion_all', {login: auth.user.id, arrayData});
        } else {
            logger.info("GET /recruit_religion/all 304 모집공고(종교) 화면으로 이동");
            res.render('recruit_religion_all', {login: null, arrayData});   
        }
    },

    recruit_religion_conductor : async (req, res) => {
        const id = req.query.id;
        const path = "지휘자";
        const board = new Board();
        const data = await board.religionList(path, id);
        let viewEndNumber;
        let viewStartNumber;

        let endNum;
        
        const listCount = await board.religionListCount(path);

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
        
        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /recruit_religion/conductor 304 모집공고(종교) 화면으로 이동");
            res.render('recruit_religion_conductor', {login: auth.user.id, arrayData});
        } else {
            logger.info("GET /recruit_religion/conductor 304 모집공고(종교) 화면으로 이동");
            res.render('recruit_religion_conductor', {login: null, arrayData});   
        }
    },

    recruit_religion_solists : async (req, res) => {
        const id = req.query.id;
        const path = "솔리스트";
        const board = new Board();
        const data = await board.religionList(path, id);
        let viewEndNumber;
        let viewStartNumber;
    
        const listCount = await board.religionListCount(path);
        const endNum = Math.ceil(listCount[0].CNT/10);
        
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
        
        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /recruit_religion/solists 304 모집공고(종교) 화면으로 이동");
            res.render('recruit_religion_solists', {login: auth.user.id, arrayData});
        } else {
            logger.info("GET /recruit_religion/solists 304 모집공고(종교) 화면으로 이동");
            res.render('recruit_religion_solists', {login: null, arrayData});   
        }
    },

    recruit_religion_accompanist : async (req, res) => {
        const id = req.query.id;
        const path = "반주자";
        const board = new Board();
        const data = await board.religionList(path, id);
        let viewEndNumber;
        let viewStartNumber;
    
        const listCount = await board.religionListCount(path);
        const endNum = Math.ceil(listCount[0].CNT/10);
        
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
        
        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /recruit_religion/accompanist 304 모집공고(종교) 화면으로 이동");
            res.render('recruit_religion_accompanist', {login: auth.user.id, arrayData});
        } else {
            logger.info("GET /recruit_religion/accompanist 304 모집공고(종교) 화면으로 이동");
            res.render('recruit_religion_accompanist', {login: null, arrayData});   
        }
    },


    recruit_religion_write : async (req, res) => {
        const auth = req.session.passport
        if(auth) {
            logger.info("GET /recruit_religion/write 304 모집공고(종교)/글쓰기 화면으로 이동");
            res.render('recruit_religion_write', {login: auth.user.id});
        } else {
            logger.info("GET /recruit_religion/write 304 모집공고(종교)/글쓰기 화면으로 이동");
            res.redirect('/recruit_religion/all')
        }
    },

    recruit_religion_update : async (req, res) => {
        const id = req.query.id;     
        const board = new Board
        const data = await board.religionUpdateList(id);
        const auth = req.session.passport
        const content = data[0].CONTENT.replace(/<br\/\>/g, '\r\n');
        
        console.log(data)
        if(auth != undefined) {
            if(auth.user.id == data[0].WRITER) {
                logger.info("GET /recruit_religion/update 304 모집공고(종교) 화면으로 이동");
                res.render('recruit_religion_update', {login: auth.user.id, data, content});
            } else {
                res.redirect('/recruit_religion/all')
            }
        } else {
            logger.info("GET /recruit_religion/update 304 모집공고(종교) 화면으로 이동");
            res.redirect('/recruit_religion/all')  
        }
    },

    robots : (req, res) => {
        res.type("text/plain");
        res.send(
            "User-agent: *\nDisallow: /admin/\n\sitemap: https://artinfokorea.com/sitemap.xml\n"
        );
    },

    error : async (req, res) => {
        const auth = req.session.passport
        if(auth != undefined) {
            logger.info("GET /error 404 화면으로 이동");
            res.render('error',{login: auth.user.id});
        } else {
            logger.info("GET /error 404 화면으로 이동");
            res.render('error', {login: null});    
        }  
    }
}

const process = { 
    admin_write : (req, res) => {
        const reqBody = req.body;
        const admin = new Admin();
        admin.adminWrite(reqBody);
        res.redirect("/admin")
    },

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

    signup_checkId : async (req, res) => {
        const reqBody = req.body;
        const signup = new Signup();
        const data = await signup.checkId(reqBody);
        if(data[0] == null) {
            res.send()
        } else {
            res.send("exist")
        }
    },

    signup_do : async (req, res) => {
        const reqBody = req.body;
        const signup = new Signup();
        await bcrypt.hash(reqBody.pwd, 10, (err, hash) => {
            reqBody.pwd = hash
            signup.signup(reqBody);
        })
        const query = encodeURIComponent('signupSuccess')
        res.redirect('/login?' + query);
    },

    login_check : async (req, res) => {        
        const reqBody = req.body;
        const login = new Login();
        const data = await login.getMember(reqBody[0])
        if(data != "") {
            const user = {
                id: data[0].ID,
                password : data[0].PWD,
                name : data[0].NAME,
                email : data[0].EMAIL,
                is_logined : true            
            }

            bcrypt.compare(reqBody[1], data[0].PWD, (err, result) => {
                if(result) {
                    req.login(user, (err) => {
                        return res.send('loginSuccess');
                    })                     
                } else {
                    res.send('checkPwd')
                }
            })
        } else {
            res.send('checkId')
        }
    },

    clientInfoUpdate : async (req, res) => {
        const reqBody = req.body; 

        const member = new Member();

        await bcrypt.hash(reqBody[0], 10, (err, hash) => {
            reqBody[0] = hash
            member.clientInfoUpdate(reqBody);
        })
        res.send()
    },

    findId : async (req, res) => {
        const reqBody = req.body;  

        const login = new Login();
        const data = await login.findId(reqBody)
        res.send(data)
    },

    findPw : async (req, res) => {
        const reqBody = req.body;  

        let temporaryPw = Math.random().toString(36).slice(2);

        const login = new Login();
        const data = await login.findUser(reqBody)
        if(data[0] !== undefined) {
            await bcrypt.hash(temporaryPw, 10, (err, hash) => {
                temporaryPw = hash
                login.temporaryUpdate(temporaryPw, reqBody);
            })

            // 본인 Gmail 계정
            const EMAIL = "choral7451@gmail.com";
            const EMAIL_PW = "ufeoetbvvwdpzstg";

            // 이메일 수신자
            let receiverEmail = reqBody[2];

            // transport 생성
            let transport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: EMAIL,
                    pass: EMAIL_PW,
                },
            });

            // 전송할 email 내용 작성
            let mailOptions = {
                from: EMAIL,
                to: receiverEmail,
                subject: "ARTINFO 임시 비밀번호",
                html: `
                    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                        <a href="https://artinfokorea.com/login"><img src="cid:logoImg" /></a>
                        <div style="margin:20px 0" >* 로그인을 계속하시려면 위 로고를 클릭하세요.</div>
                        <div 
                            style="
                            height: 60px; 
                            width: 500px; 
                            border-top: 1px solid rgb(170, 169, 169); 
                            border-bottom: 1px solid rgb(170, 169, 169); 
                            display: flex; 
                            justify-content: center; 
                            align-items: center;
                        ">
                            <h1>임시 비밀번호 : ${temporaryPw}</h1>
                        </div>
                    </div>                    
                    `,
                attachments: [{
                    filename: 'logo.png',
                    path: `src/public/img/logo.png`,
                    cid: 'logoImg'
                }]
            };

            // email 전송
            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    return;
                }
            });
        }        
        res.send(data)
    },

    recruit_religion_write : async (req, res) => {
        const reqBody = req.body;        
        const id = req.session.passport.user.id

        let content = reqBody.contentMain;
        content = content.replace(/(?:\r\n|\r|\n)/g, '<br/>');
        const board = new Board
        await board.religionWrite(reqBody, id, content);
        res.redirect('/recruit_religion/all')
    },

    recruit_religion_update : async (req, res) => {
        const reqBody = req.body;        
        const id = req.session.passport.user.id

        let content = reqBody.contentMain;
        content = content.replace(/(?:\r\n|\r|\n)/g, '<br/>');

        const board = new Board
        await board.religionUpdateSave(reqBody, id, content);
        res.redirect(`/recruit_religion/content?id=${reqBody.id}`)
    },

    recruit_religion_delete : (req, res) => {
        const reqBody = req.body;   
        const board = new Board     
        board.religionDelete(reqBody[0]);     
        res.json()
    },
}

module.exports = {
    output,
    process
}