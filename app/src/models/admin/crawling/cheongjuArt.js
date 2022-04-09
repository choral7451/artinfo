const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  CheongjuArt : async () => { 
    let data = [];
    try {
      return await axios.get('http://www.cheongju.go.kr/ac/selectBbsNttList.do?bbsNo=903&key=16220')
      .then((html) => {
        
        const $ = cheerio.load(html.data);
        const tbody = $('tbody')
        const today = new Date();  
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const date = ('0' + today.getDate()).slice(-2);
        const currentDate = (year + '-' + month + '-' + date);

        for(let i = 1; i <= 5 ; i++) {
          const getData = tbody.find(`tr:nth-child(${i})`)
          const getDate = getData.find('td:nth-child(7)').text().replace(/\./g,'-');
          const getTitle = getData.find('td:nth-child(3)').find('a').text();
          const getUrl = "http://www.cheongju.go.kr/" + getData.find('td:nth-child(3)').find('a').attr('href');
          if(currentDate == getDate) {  
            data.push(["청주시립예술단", getTitle, getDate, getUrl]);
          }
        }
        return data;
      })
    } catch (error) {
      data.push(["청주시립예술단 에러"])
      return data;
    }
  }
}   
