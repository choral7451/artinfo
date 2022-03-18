const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  Daegu : async () => { 
    try {
      return await axios.get('https://artcenter.daegu.go.kr/content.html?md=0016')
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
            const getDate = getData.find('td:nth-child(4)').text()
            const getTitle = getData.find('td:nth-child(2)').find('a').text()
            const getUrl = "artcenter.daegu.go.kr"+getData.find('td:nth-child(2)').find('a').attr('href')
            if(currentDate == getDate) {  
              data.push(["대구시립예술단", getTitle, getDate, getUrl])
            }
          }
          return data;
      })
    } catch (error) {
      data.push(["daegu 에러"])
      return data;
    }
  }
}   
