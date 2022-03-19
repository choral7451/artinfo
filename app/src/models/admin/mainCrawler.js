const logger = require("../../config/logger");
const { Nck_artist } = require('./crawling/nck_artist');
const { Nck_administration } = require('./crawling/nck_administration');
const { Busan } = require('./crawling/busan')
const { Chuncheon } = require('./crawling/chuncheon')
const { Bucheon } = require('./crawling/bucheon')
const { Ulsan } = require('./crawling/ulsan')
const { Daegu } = require('./crawling/daegu')
const { Wonju } = require('./crawling/wonju')
const { Suwon } = require('./crawling/suwon')
const { Seongnam } = require('./crawling/seongnam')
const { Ansan } = require('./crawling/ansan')
const { Anyang } = require('./crawling/anyang')

module.exports = {
    Crawler : async () => {
        let data = [];
        const nck_artist = await Nck_artist();
        const nck_administration = await Nck_administration();
        const busan = await Busan();
        const chuncheon = await Chuncheon();
        const bucheon = await Bucheon();
        const ulsan = await Ulsan();
        const daegu = await Daegu();
        const wonju = await Wonju();
        const suwon = await Suwon();
        const seongnam = await Seongnam();
        const ansan = await Ansan();
        
        const anyang = await Anyang();
        
        if(nck_artist[0] != undefined) {
            data.push(nck_artist);
        } 
        
        if(nck_administration[0] != undefined) {
            data.push(nck_administration); 
        }   
        
        if(busan[0] != undefined) {
            data.push(busan);
        } 
        
        if(chuncheon[0] != undefined) {
            data.push(chuncheon);
        }

        if(bucheon[0] != undefined) {
            data.push(bucheon);
        }

        if(ulsan[0] != undefined) {
            data.push(ulsan);
        }

        if(daegu[0] != undefined) {
            data.push(daegu);
        }

        if(wonju[0] != undefined) {
            data.push(wonju);
        }

        if(suwon[0] != undefined) {
            data.push(suwon);
        }

        if(seongnam[0] != undefined) {
            data.push(seongnam)
        }

        if(ansan[0] != undefined) {
            data.push(ansan)
        }

        data.push(anyang)
        
        console.log(" main :"  + data)
        return data;     
    }
}

