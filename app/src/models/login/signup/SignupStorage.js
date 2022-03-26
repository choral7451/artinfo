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

    static signup(data) {
        console.log(data)
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO MEMBER (ID, PWD, NAME, BIRTH, GENDER, EMAIL) VALUES(
                "${data.id}", 
                "${data.pwd}", 
                "${data.name}", 
                "${data.birth}", 
                "${data.gender}", 
                "${data.email}"
                );`;
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }
}


module.exports = SignupStorage;