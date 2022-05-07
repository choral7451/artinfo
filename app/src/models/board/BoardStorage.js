const db = require('../../config/db');

class BoardStorage {
    static getList(path, id) {
        return new Promise((resolve, reject) => {
            const count = id*10-10
            let query;
  
            if(path == "All") {
                if(id) {
                    query = `SELECT * FROM BOARD ORDER BY DATE DESC, ID DESC LIMIT ${count}, 10;`;
                } else {
                    query = `SELECT * FROM BOARD ORDER BY DATE DESC, ID DESC LIMIT 10;`;
                }
            } else if (path == "SEARCH") {
                if(name) {
                    query = `SELECT * FROM BOARD WHERE TYPE = "${path}" ORDER BY DATE DESC, ID DESC LIMIT ${count}, 10;`;
                } else {
                    query = `SELECT * FROM BOARD WHERE TYPE = "${path}" ORDER BY DATE DESC, ID DESC LIMIT 10;`;
                }    
            } else {                
                if(id) {
                    query = `SELECT * FROM BOARD WHERE TYPE = "${path}" ORDER BY DATE DESC, ID DESC LIMIT ${count}, 10;`;
                } else {
                    query = `SELECT * FROM BOARD WHERE TYPE = "${path}" ORDER BY DATE DESC, ID DESC LIMIT 10;`;
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
            console.log(path)
            if(path == "All") {
                if(id) {
                    query = `SELECT * FROM BOARD_RELIGION ORDER BY ID DESC LIMIT ${count}, 10;`;
                } else {
                    query = `SELECT * FROM BOARD_RELIGION ORDER BY ID DESC LIMIT 10;`;
                }
            } else if (path === "솔리스트") {
                if(id) {
                    query = `SELECT * FROM BOARD_RELIGION WHERE EXPERTTYPE IN ("소프라노", "알토", "테너", "베이스") ORDER BY ID DESC LIMIT ${count}, 10;`;
                } else {
                    query = `SELECT * FROM BOARD_RELIGION WHERE EXPERTTYPE IN ("소프라노", "알토", "테너", "베이스") ORDER BY ID DESC LIMIT 10;`;
                }    
            } else {               
                if(id) {
                    query = `SELECT * FROM BOARD_RELIGION WHERE EXPERTTYPE = "${path}" ORDER BY ID DESC LIMIT ${count}, 10;`;
                } else {
                    query = `SELECT * FROM BOARD_RELIGION WHERE EXPERTTYPE = "${path}" ORDER BY ID DESC LIMIT 10;`;
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
                query = `SELECT COUNT(*) AS CNT FROM BOARD_RELIGION WHERE EXPERTTYPE = "${path}";`;
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

    static religionDelete(id) {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM BOARD_RELIGION WHERE ID = ${id};`;
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }

    static religionUpdateList(id) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM BOARD_RELIGION WHERE ID = ${id};`;
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }

    static religionWrite(data, id, content) {
        const today = new Date();  
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const date = ('0' + today.getDate()).slice(-2);
        const currentDate = (year + '-' + month + '-' + date);

        let salary;
        if(data.salaryType == '협의 후 결정' ) {
            salary = '협의 후 결정';
        } else if(data.salaryType == 'won'){
            if(data.direct == 0) {
                salary = '협의 후 결정';                
            } else {
                salary = data.direct;
            }
        }
        
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
                    "${content}",
                    "${currentDate}"
                )
            `;
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }

    static religionUpdateSave(data, id, content) {
        const today = new Date();  
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const date = ('0' + today.getDate()).slice(-2);
        const currentDate = (year + '-' + month + '-' + date);

        let salary;
        if(data.salaryType == '협의 후 결정' ) {
            salary = '협의 후 결정';
        } else if(data.salaryType == 'won'){
            if(data.direct == 0) {
                salary = '협의 후 결정';                
            } else {
                salary = data.direct;
            }
        }
        
        return new Promise((resolve, reject) => {
            const query = 
                `   
                    UPDATE BOARD_RELIGION SET 
                    WRITER = "${id}", 
                    TITLE = "${data.title}", 
                    EXPERTTYPE = "${data.expert}", 
                    TYPE = "${data.type}", 
                    SALARY ="${salary}", 
                    NAME ="${data.name}",
                    PNUMBER = "${data.phonenumber}",
                    ADDRESS = "${data.address}",
                    EMAIL = "${data.email}",
                    CONTENT = "${content}"
                    WHERE ID = ${data.id};
                `
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }
}

module.exports = BoardStorage;