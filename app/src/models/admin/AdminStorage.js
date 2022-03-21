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

    static adminSave(data) {
        return new Promise((resolve, reject) => {
            let query
            for(let i = 0 ; i < data.length ; i++) {
                query = `INSERT INTO BOARD (TYPE, CNAME, TITLE, DATE, URL) VALUES ("${data[i][1]}", "${data[i][2]}", "${data[i][3]}", "${data[i][5]}", "${data[i][4]}");`;
                db.query(query, (err) => {
                    if(err) reject(`${err}`)
                    else resolve({ success : true});
                });  
            }    
        })
    }

    static adminWrite(data) {
        console.log(data)
        return new Promise((resolve, reject) => {
            const query = 
            `INSERT INTO CRAWLING (CNAME, TITLE, DATE, TYPE, URL) 
            VALUES ("${data.cname}", "${data.title}", "${data.date}", "${data.type}"," ${data.url}")`;
            db.query(query, (err) => {
                if(err) reject(`${err}`)
                else resolve({ success : true});
            });  
        })
    }

    static adminInit() {
        return new Promise((resolve, reject) => {
            const query = `TRUNCATE TABLE CRAWLING`;
            db.query(query, (err) => {
                if(err) reject(`${err}`)
                else resolve({ success : true});
            }); 
        })
    }

    static adminCrawling(data) {
        return new Promise((resolve, reject) => {
            let query
            for(let i = 0 ; i < data.length ; i++) {
                for(let j = 0 ; j < data[i].length ; j++) {
                    query = `INSERT INTO CRAWLING (CNAME, TITLE, DATE, URL) VALUES ("${data[i][j][0]}", "${data[i][j][1]}", "${data[i][j][2]}", "${data[i][j][3]}");`;
                    db.query(query, (err) => {
                        if(err) reject(`${err}`)
                        else resolve({ success : true});
                    });  
                }                
            }    
        })
    }

    static adminDelete(id) {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM CRAWLING WHERE ID = ${id};`;
            db.query(query, (err) => {
                if(err) reject(`${err}`)
                else resolve({ success : true});
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
        return new Promise((resolve, reject) => {
            const query = 
                `   
                    UPDATE CRAWLING SET 
                    TYPE = "${data.type}", 
                    CNAME = "${data.cname}", 
                    DATE = "${data.date}", 
                    TITLE = "${data.title}", 
                    URL ="${data.url}" 
                    WHERE ID = ${data.id};
                `
            db.query(query, (err) => {
                if(err) reject(`${err}`)
                else resolve({ success : true});
            });
        })
    }
}

module.exports = AdminStorage;