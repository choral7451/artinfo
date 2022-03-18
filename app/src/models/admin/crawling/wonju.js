const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  Wonju : async () => { 
    try {
      return await axios.get('https://www.wonju.go.kr/arts/pr/notice.html')
      .then((html) => {
        let data = [];
        const $ = cheerio.load(html.data);
        const tbody = $('tbody')
        const today = new Date();  
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const date = ('0' + today.getDate()).slice(-2)-1;
        const currentDate = (year + '-' + month + '-' + date);

        for(let i = 1; i <= 5 ; i++) {
          const getData = tbody.find(`tr:nth-child(${i})`)
          const getDate = getData.find('td:nth-child(5)').text().substring('8','18')
          const getTitle = getData.find('td:nth-child(3)').find('a').text()
          const getUrl = "https://www.wonju.go.kr/arts/pr/" + getData.find('td:nth-child(3)').find('a').attr('href')
          if( currentDate == getDate) {  
            data.push(["원주시립예술단", getTitle, getDate, getUrl]);
          }
        }
        return data;
      })
    } catch (error) {
      data.push(["wonju 에러"])
      return data;
    }
  }
}   
