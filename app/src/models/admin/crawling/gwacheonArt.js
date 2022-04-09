const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  GwacheonArt : async () => { 
    let data = [];
    try {
      return await axios.get('https://www.gcart.or.kr/Arts/newsList.do')
      .then((html) => {
        
        const $ = cheerio.load(html.data);
        const ul = $('ul')
        const today = new Date();  
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const date = ('0' + today.getDate()).slice(-2);
        const currentDate = (year + '-' + month + '-' + date);

        for(let i = 2; i <= 6 ; i++) {
          const getData = ul.find(`li:nth-child(${i})`)
          const getDate = getData.find('p:nth-child(4)').text().replace(/\./g,'-');
          const getTitle = getData.find('p:nth-child(2)').find('a').text();
          const getUrl = "https://www.gcart.or.kr" + getData.find('p:nth-child(2)').find('a').attr('href');
          if(currentDate == getDate) {  
            data.push(["과천시립예술단", getTitle, getDate, getUrl]);
          }
        }
        return data;
      })
    } catch (error) {
      data.push(["과천시립예술단 에러"])
      return data;
    }
  }
}   
