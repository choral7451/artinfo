const db = require('../../config/db');

class LoginStorage {
    static getMember(data) {
        return new Promise((resolve, reject) => {
            let query = `SELECT * FROM MEMBER WHERE ID = "${data}"`;
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }
}

module.exports = LoginStorage;