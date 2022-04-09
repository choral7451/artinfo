const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  SeoulArt : async () => { 
    let data = [];
    try {
      return await axios.get('https://www.sjartgroups.or.kr/sjartgroups/bbs/B0000025/list.do?menuNo=300056')
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
          const getDate = getData.find('td:nth-child(2)').find('p').text().substring('4').replace(/\./g,'-');
          const getTitle = getData.find('td:nth-child(1)').find('a').text();
          const getUrl = "https://www.sjartgroups.or.kr" + getData.find('td:nth-child(1)').find('a').attr('href');
          if(currentDate == getDate) {  
            data.push(["서울시립예술단", getTitle, getDate, getUrl]);
          }
        }
        return data;
      })
    } catch (error) {
      data.push(["서울시립예술단 에러"])
      return data;
    }
  }
}   
