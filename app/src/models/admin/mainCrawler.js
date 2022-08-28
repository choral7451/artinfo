const logger = require("../../config/logger");
const { Nck_artist } = require("./crawling/nck_artist");
const { Nck_administration } = require("./crawling/nck_administration");
const { Busan } = require("./crawling/busan");
const { Chuncheon } = require("./crawling/chuncheon");
const { Bucheon } = require("./crawling/bucheon");
const { Ulsan } = require("./crawling/ulsan");
const { Daegu } = require("./crawling/daegu");
const { Wonju } = require("./crawling/wonju");
const { Suwon } = require("./crawling/suwon");
const { Seongnam } = require("./crawling/seongnam");
const { Ansan } = require("./crawling/ansan");
const { Anyang } = require("./crawling/anyang");
const { Symphonysong } = require("./crawling/symphonysong");
const { Koreansymphony } = require("./crawling/koreansymphony");
const { KBS } = require("./crawling/kbs");
const { Goyang } = require("./crawling/goyang");
const { DaejeonChoir } = require("./crawling/daejeonChoir");
const { DaejeonOrch } = require("./crawling/daejeonOrch");
const { SeoulArt } = require("./crawling/seoulArt");
const { SeogwipoArt } = require("./crawling/seogwipoArt");
const { JejuArt } = require("./crawling/jejuArt");
const { GangnamArt } = require("./crawling/gangnamArt");
const { CheongjuArt } = require("./crawling/cheongjuArt");
const { GwacheonArt } = require("./crawling/gwacheonArt");
const { JeonjuArt } = require("./crawling/jeonjuArt");

module.exports = {
  Crawler: async () => {
    let data = [];
    let list = [
      Nck_administration(),
      Nck_artist(),
      Busan(),
      Chuncheon(),
      Bucheon(),
      Ulsan(),
      Daegu(),
      Wonju(),
      Suwon(),
      Seongnam(),
      Ansan(),
      Anyang(),
      Symphonysong(),
      Koreansymphony(),
      KBS(),
      Goyang(),
      DaejeonChoir(),
      DaejeonOrch(),
      SeoulArt(),
      SeogwipoArt(),
      JejuArt(),
      GangnamArt(),
      CheongjuArt(),
      GwacheonArt(),
      JeonjuArt(),
    ];

    return await Promise.all(list);
  },
};
