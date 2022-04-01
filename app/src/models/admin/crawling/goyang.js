const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  Goyang : async () => { 
    let data = [];
    try {
      return await axios.get('http://www.choralegoyang.or.kr/city/notice.asp')
      .then((html) => {
        
        const $ = cheerio.load(html.data);
        const tbody = $('tbody')
        const today = new Date();  
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const date = ('0' + today.getDate()).slice(-2);
        const currentDate = (year + '-' + month + '-' + date);
          
        for(let i = 1; i <= 3 ; i++) {
          const getData = tbody.find(`tr:nth-child(${i})`)
          const getDate = getData.find('td:nth-child(3)').text()
          const getTitle = getData.find('td:nth-child(2)').text()
          const getUrl = "http://www.choralegoyang.or.kr/city/notice.asp";
          if(currentDate == getDate) {  
            data.push(["고양시립예술단", getTitle, getDate, getUrl]);
          }
        }
        return data;
      })
    } catch (error) {
      data.push(["고양시립예술단 에러"])
      return data;
    }
  }
}   
