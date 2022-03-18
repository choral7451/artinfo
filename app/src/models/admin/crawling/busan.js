const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  Busan : async () => { 
    try {
      return await axios.get('https://www.bscc.or.kr/05_community/?mcode=0405010000&mode=1&hd=%EC%B1%84%EC%9A%A9%EA%B3%B5%EA%B3%A0')
      .then((html) => {
        let data = [];
        const $ = cheerio.load(html.data);
        const tbody = $('tbody')
        const today = new Date();  
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const date = ('0' + today.getDate()).slice(-2)-1;
        const currentDate = (year + '-' + month + '-' + date);
          
        for(let i = 1; i <= 10 ; i++) {
          const getData = tbody.find(`tr:nth-child(${i})`)
          const getDate = getData.find('td:nth-child(6)').text()
          const getTitle = getData.find('td:nth-child(2)').text()
          const getUrl = getData.find('td:nth-child(2)').find('a').attr('href')
          if(currentDate == getDate) {  
            data.push(["부산시립예술단", getTitle, getDate, getUrl]);
          }
        }
        return data;
      })
    } catch (error) {
      data.push(["busan 에러"])
      return data;
    }
  }
}   
