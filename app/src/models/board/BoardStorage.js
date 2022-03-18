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
}

module.exports = BoardStorage;