const db = require('../../config/db');

class GuestCountStorage {
    static setCount(ip) {
        return new Promise((resolve, reject) => {
            const selectQuery = `SELECT * FROM GUEST WHERE IP = "${ip}";`
            db.query(selectQuery, (err, data) => {
                if(err) reject(`${err}`)
                else {
                    if(data[0] === undefined) {
                        const query = `INSERT INTO GUEST (IP) VALUES ("${ip}")`
                        db.query(query, (err, data) => {
                            if(err) reject(`${err}`) 
                            else resolve(data)
                        })
                    }
                    resolve(data)
                }
            });
        })
    }

    static getCount() {
        return new Promise((resolve, reject) => {
            let query = `SELECT COUNT(*) AS CNT FROM GUEST;`
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }
}

module.exports = GuestCountStorage;