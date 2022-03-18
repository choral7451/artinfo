const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  Bucheon : async () => { 
    try {
      return await axios.get('https://www.bucheonphil.or.kr/front/M0000025/article/list.do')
      .then((html) => {
          let data = [];
          const $ = cheerio.load(html.data);
          const tbody = $('tbody')
          const today = new Date();  
          const year = today.getFullYear(); // 년도
          const month = ('0' + (today.getMonth() + 1)).slice(-2);
          const date = ('0' + today.getDate()).slice(-2);
          const currentDate = (year + '-' + month + '-' + date);
            
          for(let i = 1; i <= 10 ; i++) {
            const getData = tbody.find(`tr:nth-child(${i})`)
            const getDate = getData.find('td:nth-child(3)').text()
            const getTitle = getData.find('td:nth-child(2)').find('a').text().substring(13)
            if(currentDate == getDate) {  
              data.push(["부천시립예술단", getTitle, getDate, "https://www.bucheonphil.or.kr/front/M0000025/article/list.do"]);
            }
          }
          return data;
      })
    } catch (error) {
      data.push(["bucheon 에러"])
      return data;
    }
  }
}   
