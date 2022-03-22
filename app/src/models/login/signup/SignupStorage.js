const db = require('../../../config/db');

class SignupStorage {
    static checkId(data) {
        return new Promise((resolve, reject) => {
            let query = `SELECT NAME FROM MEMBER WHERE ID = "${data}"`;
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }
}

module.exports = SignupStorage;