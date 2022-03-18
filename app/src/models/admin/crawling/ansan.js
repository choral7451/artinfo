const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  Ansan : async () => { 
    try {
      return await axios.get('https://ansanarts.com/?page_id=3331')
      .then((html) => {
        let data = [];
        const $ = cheerio.load(html.data);
        const tbody = $('tbody')
        const today = new Date();  
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const date = ('0' + today.getDate()).slice(-2);
        const currentDate = (year + '-' + month + '-' + date);
          
        for(let i = 1; i <= 5 ; i++) {
          const getData = tbody.find(`tr:nth-child(${i})`)
          const getDate = getData.find('td:nth-child(4)').find('span').text()
          const getTitle = getData.find('td:nth-child(2)').find('a').text()
          const getUrl = getData.find('td:nth-child(2)').find('a').attr('href')
          if(currentDate == getDate) {  
            data.push(["안산시립예술단", getTitle, getDate, getUrl]);
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
