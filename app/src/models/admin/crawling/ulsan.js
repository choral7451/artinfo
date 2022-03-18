const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  Ulsan : async () => { 
    try {
      return await axios.get('https://ucac.ulsan.go.kr/spp/bbs/BBS_000000000000001/list/postList.do?searchCondition=0&searchKeyword=%EB%AA%A8%EC%A7%91&bbsId=BBS_000000000000001&bbsType=list&pageIndex=1')
      .then((html) => {
          let data = [];
          const $ = cheerio.load(html.data);
          const ul = $('ul.table_list')
          const today = new Date();  
          const year = today.getFullYear(); // 년도
          const month = ('0' + (today.getMonth() + 1)).slice(-2);
          const date = ('0' + today.getDate()).slice(-2);
          const currentDate = (year + '-' + month + '-' + date);
            
          for(let i = 10; i <= 19 ; i++) {
            const getData = ul.find(`li:nth-child(${i})`).find('div.row')
            const getDate = getData.find('p:nth-child(4)').text()
            const getTitle = getData.find('p:nth-child(2)').find('a').text().substring(46)
            if(currentDate == getDate) {  
              data.push(["울산시립예술단", getTitle, getDate, "https://ucac.ulsan.go.kr/spp/bbs/BBS_000000000000001/list/postList.do?searchCondition=0&searchKeyword=%EB%AA%A8%EC%A7%91&bbsId=BBS_000000000000001&bbsType=list&pageIndex=1"]);
            }
          }
          return data;
      })
    } catch (error) {
      data.push(["ulsan 에러"])
      return data;
    }
  }
}   
