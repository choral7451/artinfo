const db = require('../../config/db');

class BoardStorage {
    static getList(path, id) {
        return new Promise((resolve, reject) => {
            const count = id*10-10
            let query;
  
            if(path == "All") {
                if(id) {
                    query = `SELECT * FROM BOARD ORDER BY ID DESC LIMIT ${count}, 10;`;
                } else {
                    query = `SELECT * FROM BOARD ORDER BY ID DESC LIMIT 10;`;
                }
            } else if (path == "SEARCH") {
                if(name) {
                    query = `SELECT * FROM BOARD WHERE TYPE = "${path}" ORDER BY ID DESC LIMIT ${count}, 10;`;
                } else {
                    query = `SELECT * FROM BOARD WHERE TYPE = "${path}" ORDER BY ID DESC LIMIT 10;`;
                }    
            } else {                
                if(id) {
                    query = `SELECT * FROM BOARD WHERE TYPE = "${path}" ORDER BY ID DESC LIMIT ${count}, 10;`;
                } else {
                    query = `SELECT * FROM BOARD WHERE TYPE = "${path}" ORDER BY ID DESC LIMIT 10;`;
                }
            } 

            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }

    static listCount(path) {
        return new Promise((resolve, reject) => {
            let query;
            if(path == "All") {
                query = `SELECT COUNT(*) AS CNT FROM BOARD;`;
            } else {
                query = `SELECT COUNT(*) AS CNT FROM BOARD WHERE TYPE = "${path}";`;
            }
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }

    static religionList(path, id) {
        return new Promise((resolve, reject) => {
            const count = id*10-10
            let query;
  
            if(path == "All") {
                if(id) {
                    query = `SELECT * FROM BOARD_RELIGION ORDER BY ID DESC LIMIT ${count}, 10;`;
                } else {
                    query = `SELECT * FROM BOARD_RELIGION ORDER BY ID DESC LIMIT 10;`;
                }
            } else if (path == "SEARCH") {
                if(name) {
                    query = `SELECT * FROM BOARD_RELIGION WHERE TYPE = "${path}" ORDER BY ID DESC LIMIT ${count}, 10;`;
                } else {
                    query = `SELECT * FROM BOARD_RELIGION WHERE TYPE = "${path}" ORDER BY ID DESC LIMIT 10;`;
                }    
            } else {                
                if(id) {
                    query = `SELECT * FROM BOARD_RELIGION WHERE TYPE = "${path}" ORDER BY ID DESC LIMIT ${count}, 10;`;
                } else {
                    query = `SELECT * FROM BOARD_RELIGION WHERE TYPE = "${path}" ORDER BY ID DESC LIMIT 10;`;
                }
            } 

            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }

    static religionListCount(path) {
        return new Promise((resolve, reject) => {
            let query;
            if(path == "All") {
                query = `SELECT COUNT(*) AS CNT FROM BOARD_RELIGION;`;
            } else {
                query = `SELECT COUNT(*) AS CNT FROM BOARD_RELIGION WHERE TYPE = "${path}";`;
            }
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }

    static religionListContent(queryId) {
        return new Promise((resolve, reject) => {
            const query =`SELECT * FROM BOARD_RELIGION WHERE ID = ${queryId}`
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }

    static religionWrite(data, id) {
        const today = new Date();  
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const date = ('0' + today.getDate()).slice(-2);
        const currentDate = (year + '-' + month + '-' + date);

        let salary;
        if(data.salaryType == '협의 후 결정') {
            salary = data.salaryType;
        } else {
            salary = data.salaryDirect
        }
        console.log(data)
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO BOARD_RELIGION (WRITER, TITLE, EXPERTTYPE, TYPE, SALARY, NAME, PNUMBER, ADDRESS, EMAIL, CONTENT, DATE)
                VALUES(
                    "${id}",
                    "${data.title}",
                    "${data.expert}",
                    "${data.type}",
                    "${salary}",
                    "${data.name}",
                    "${data.phonenumber}",
                    "${data.address}",
                    "${data.email}",
                    "${data.contentMain}",
                    "${currentDate}"
                )
            `;
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }
}

module.exports = BoardStorage;