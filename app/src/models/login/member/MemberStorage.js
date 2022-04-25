const db = require('../../../config/db');

class MemberStorage {
    static clientInfoUpdate(data) {
        return new Promise((resolve, reject) => {
            const query = 
            `   
                UPDATE MEMBER SET 
                PWD = "${data[0]}", 
                BIRTH = "${data[2]}", 
                EMAIL = "${data[3]}"
                WHERE ID = "${data[1]}";
            `;

            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }
}


module.exports = MemberStorage;