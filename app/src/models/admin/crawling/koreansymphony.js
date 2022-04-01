const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  Koreansymphony : async () => { 
    let data = [];
    try {
      return await axios.get('http://www.koreansymphony.com/bbs/data/list.do?menu_idx=26')
      .then((html) => {
        
        const $ = cheerio.load(html.data);
        const tbody = $('.tbody')
        const today = new Date();  
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const date = ('0' + today.getDate()).slice(-2);
        const currentDate = (year + '-' + month + '-' + date);
        
        for(let i = 2; i <= 6 ; i++) {
          const getData = tbody.find(`ul:nth-child(${i})`)
          const getDate = getData.find('li:nth-child(5)').text().substring('6','16')
          const getTitle = getData.find('li:nth-child(2)').find('a').text()
          const getUrl = "http://www.koreansymphony.com/bbs/data/list.do?menu_idx=26"
          if(currentDate == getDate) {  
            data.push(["국립심포니", getTitle, getDate, getUrl]);
          }
        }
        return data;
      })
    } catch (error) {
      data.push(["국립심포니"])
      return data;
    }
  }
}   
