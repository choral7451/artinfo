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
            logger.info(`국립합창단(단원) 데이터 ${nck_artist.length} 건 받아옴`);
            data.push(nck_artist);
        } else {
            logger.info("국립합창단(단원) 데이터 0 건 받아옴");
        }
        
        if(nck_administration[0] != undefined) {            
            logger.info(`국립합창단(행정) 데이터 ${nck_administration.length} 건 받아옴`);
            data.push(nck_administration); 
        } else {
            logger.info("국립합창단(행정) 데이터 0 건 받아옴");
        }  
        
        if(busan[0] != undefined) {
            logger.info(`부산시립예술단 데이터 ${busan.length} 건 받아옴`);
            data.push(busan);
        } else {
            logger.info(`부산시립예술단 데이터 0 건 받아옴`);
        }
        
        if(chuncheon[0] != undefined) {
            logger.info(`춘천시립예술단 데이터 ${chuncheon.length} 건 받아옴`);
            data.push(chuncheon);
        } else {
            logger.info(`춘천시립예술단 데이터 0 건 받아옴`);
        }

        if(bucheon[0] != undefined) {
            logger.info(`부천시립예술단 데이터 ${bucheon.length} 건 받아옴`);
            data.push(bucheon);
        } else {
            logger.info(`부천시립예술단 데이터 0 건 받아옴`);
        }

        if(ulsan[0] != undefined) {
            logger.info(`울산시립예술단 데이터 ${ulsan.length} 건 받아옴`);
            data.push(ulsan);
        } else {
            logger.info(`울산시립예술단 데이터 0 건 받아옴`);
        }

        if(daegu[0] != undefined) {
            logger.info(`대구시립예술단 데이터 ${daegu.length} 건 받아옴`);
            data.push(daegu);
        } else {
            logger.info(`대구시립예술단 데이터 0 건 받아옴`);
        }

        if(wonju[0] != undefined) {
            logger.info(`원주시립예술단 데이터 ${wonju.length} 건 받아옴`);
            data.push(wonju);
        } else {
            logger.info(`원주시립예술단 데이터 0 건 받아옴`);
        }

        if(suwon[0] != undefined) {
            logger.info(`수원시립예술단 데이터 ${suwon.length} 건 받아옴`);
            data.push(suwon);
        } else {
            logger.info(`수원시립예술단 데이터 0 건 받아옴`);
        }

        if(seongnam[0] != undefined) {
            logger.info(`성남시립예술단 데이터 ${seongnam.length} 건 받아옴`);
            data.push(seongnam)
        } else {
            logger.info(`성남시립예술단 데이터 0 건 받아옴`);
        }

        if(ansan[0] != undefined) {
            logger.info(`안산시립합창단 데이터 ${ansan.length} 건 받아옴`);
            data.push(ansan)
        } else {
            logger.info(`안산시립합창단 데이터 0 건 받아옴`);
        }

        if(anyang[0] != undefined) {
            logger.info(`안산시립합창단 데이터 ${anyang.length} 건 받아옴`);
            data.push(anyang)
        } else {
            logger.info(`안산시립합창단 데이터 0 건 받아옴`);
        }

        data.push(anyang)
        
        return data;     
    }
}

