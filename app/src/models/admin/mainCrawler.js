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
const { Symphonysong } = require('./crawling/symphonysong')
const { Koreansymphony } = require('./crawling/koreansymphony')
const { KBS } = require('./crawling/kbs')
const { Goyang } = require('./crawling/goyang')
const { DaejeonChoir } = require('./crawling/daejeonChoir')
const { DaejeonOrch } = require('./crawling/daejeonOrch')
const { SeoulArt } = require('./crawling/seoulArt')
const { SeogwipoArt } = require('./crawling/seogwipoArt')
const { JejuArt } = require('./crawling/jejuArt')
const { GangnamArt } = require('./crawling/gangnamArt');
const { CheongjuArt } = require('./crawling/cheongjuArt');
const { GwacheonArt } = require('./crawling/gwacheonArt');
const { JeonjuArt } = require('./crawling/jeonjuArt');

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
        const symphonysong = await Symphonysong();
        const koreansymphony = await Koreansymphony();
        const kbs = await KBS();
        const goyang = await Goyang();
        const daejeonChoir = await DaejeonChoir();
        const daejeonOrch = await DaejeonOrch();
        const seoulArt = await SeoulArt();
        const seogwipoArt = await SeogwipoArt();
        const jejuArt = await JejuArt();
        const gangnamArt = await GangnamArt();
        const cheongjuArt = await CheongjuArt();
        const gwacheonArt = await GwacheonArt();
           const jeonjuArt = await JeonjuArt();
        
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
            logger.info(`안양시립합창단 데이터 ${anyang.length} 건 받아옴`);
            data.push(anyang)
        } else {
            logger.info(`안양시립합창단 데이터 0 건 받아옴`);
        }

        if(symphonysong[0] != undefined) {
            logger.info(`심포니송 데이터 ${symphonysong.length} 건 받아옴`);
            data.push(symphonysong)
        } else {
            logger.info(`심포니송 데이터 0 건 받아옴`);
        }

        if(koreansymphony[0] != undefined) {
            logger.info(`국립심포니 데이터 ${koreansymphony.length} 건 받아옴`);
            data.push(koreansymphony)
        } else {
            logger.info(`국립심포니 데이터 0 건 받아옴`);
        }

        if(kbs[0] != undefined) {
            logger.info(`kbs교향악단 데이터 ${kbs.length} 건 받아옴`);
            data.push(kbs)
        } else {
            logger.info(`kbs교향악단 데이터 0 건 받아옴`);
        }

        if(goyang[0] != undefined) {
            logger.info(`고양시립예술단 데이터 ${goyang.length} 건 받아옴`);
            data.push(goyang)
        } else {
            logger.info(`고양시립예술단 데이터 0 건 받아옴`);
        }

        if(daejeonChoir[0] != undefined) {
            logger.info(`대전시립합창단 데이터 ${daejeonChoir.length} 건 받아옴`);
            data.push(daejeonChoir)
        } else {
            logger.info(`대전시립합창단 데이터 0 건 받아옴`);
        }

        if(daejeonOrch[0] != undefined) {
            logger.info(`대전시립교향악단 데이터 ${daejeonOrch.length} 건 받아옴`);
            data.push(daejeonOrch)
        } else {
            logger.info(`대전시립교향악단 데이터 0 건 받아옴`);
        }

        if(seoulArt[0] != undefined) {
            logger.info(`서울시립예술단 데이터 ${seoulArt.length} 건 받아옴`);
            data.push(seoulArt)
        } else {
            logger.info(`서울시립예술단 데이터 0 건 받아옴`);
        }

        if(seogwipoArt[0] != undefined) {
            logger.info(`서귀포예술단 데이터 ${seogwipoArt.length} 건 받아옴`);
            data.push(seogwipoArt)
        } else {
            logger.info(`서귀포예술단 데이터 0 건 받아옴`);
        }
        
        if(jejuArt[0] != undefined) {
            logger.info(`제주예술단 데이터 ${jejuArt.length} 건 받아옴`);
            data.push(jejuArt)
        } else {
            logger.info(`제주예술단 데이터 0 건 받아옴`);
        }

        if(gangnamArt[0] != undefined) {
            logger.info(`강남예술단 데이터 ${gangnamArt.length} 건 받아옴`);
            data.push(gangnamArt)
        } else {
            logger.info(`강남예술단 데이터 0 건 받아옴`);
        }

        if(cheongjuArt[0] != undefined) {
            logger.info(`청주시립예술단 데이터 ${cheongjuArt.length} 건 받아옴`);
            data.push(cheongjuArt)
        } else {
            logger.info(`청주시립예술단 데이터 0 건 받아옴`);
        }

        if(gwacheonArt[0] != undefined) {
            logger.info(`과천시립예술단 데이터 ${gwacheonArt.length} 건 받아옴`);
            data.push(gwacheonArt)
        } else {
            logger.info(`과천시립예술단 데이터 0 건 받아옴`);
        }

        if(jeonjuArt[0] != undefined) {
            logger.info(`전주시립예술단 데이터 ${jeonjuArt.length} 건 받아옴`);
            data.push(jeonjuArt)
        } else {
            logger.info(`전주시립예술단 데이터 0 건 받아옴`);
        }

        return data;     
    }
}

