const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  Suwon : async () => { 
    try {
      return await axios.get('http://www.artsuwon.or.kr/?p=49')
      .then((html) => {
        let data = [];
        const $ = cheerio.load(html.data);
        const tbody = $('tbody')
        const today = new Date();  
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const date = ('0' + today.getDate()).slice(-2);
        const currentDate = (year + '-' + month + '-' + date);

        for(let i = 2; i <= 6 ; i++) {
          const getData = tbody.find(`tr:nth-child(${i})`)
          const getDate = getData.find('td:nth-child(5)').text()
          const getTitle = getData.find('td:nth-child(2)').find('a').text()
          const getUrl = "http://www.artsuwon.or.kr/" + getData.find('td:nth-child(2)').find('a').attr('href')
          if(currentDate == getDate) {  
            data.push(["수원시립예술단", getTitle, getDate, getUrl]);
          }
        }
        return data;
      })
    } catch (error) {
      data.push(["suwon 에러"])
      return data;
    }
  }
}   
