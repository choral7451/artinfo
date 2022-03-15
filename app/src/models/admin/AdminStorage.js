const db = require('../../config/db');

class AdminStorage {
    static getList() {
        return new Promise((resolve, reject) => {
            let query = 'SELECT * FROM CRAWLING;'
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }

    static updateContentGet(id) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM CRAWLING WHERE ID = ${id};`
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }

    static updateContentSave(data) {
        console.log(data)
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM CRAWLING WHERE ID = ${id};`
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve({ success : true});
            });
        })
    }
}

module.exports = AdminStorage;