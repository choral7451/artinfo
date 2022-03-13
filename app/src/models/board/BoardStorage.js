const db = require('../../config/db');

class BoardStorage {
    static getList(type) {
        return new Promise((resolve, reject) => {
            let query
         
            if ( type == "ORCHESTRA" || type == "CHOIR" || type == "ADMINISTRATION" || type == "ETC") {
                query = `SELECT * FROM BOARD WHERE TYPE = "${type}"  ORDER BY ID DESC LIMIT 10`;
            } else if ( type == undefined || type == "ALL"){
                query = "SELECT * FROM BOARD ORDER BY ID DESC LIMIT 10;";
            }
 

            
            db.query(query, (err, data) => {
                if(err) reject(`${err}`)
                else resolve(data)
            });
        })
    }
}

module.exports = BoardStorage;