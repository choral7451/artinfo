const db = require('../../config/db');

class BoardStorage {
    static getList(id) {
        return new Promise((resolve, reject) => {
            const count = id*10-10
            let query;
            if(id) {
                query = `SELECT * FROM BOARD ORDER BY ID DESC LIMIT ${count}, 10;`;
            } else {
                query = `SELECT * FROM BOARD ORDER BY ID DESC LIMIT 10;`;
            }

            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }

    static listCount() {
        return new Promise((resolve, reject) => {
            const query = `SELECT COUNT(*) AS CNT FROM BOARD;`;
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }
}

module.exports = BoardStorage;