const db = require('../../config/db');

class HomeStorage {
    static leftList(pth) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM BOARD ORDER BY DATE DESC, ID DESC LIMIT 7;`;
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }

    static rightList(pth) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM BOARD_RELIGION ORDER BY ID DESC LIMIT 7;`;
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }
}

module.exports = HomeStorage;