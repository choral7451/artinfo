const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  SeogwipoArt : async () => { 
    let data = [];
    try {
      return await axios.get('https://culture.seogwipo.go.kr/smusic/community/notice.htm')
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
          const getDate = getData.find('td:nth-child(5)').text()
          const getTitle = getData.find('td:nth-child(2)').find('a').text();
          const getUrl = "https://culture.seogwipo.go.kr/smusic/community/notice.htm";
          if(currentDate == getDate) {  
            data.push(["서귀포예술단", getTitle, getDate, getUrl]);
          }
        }
        return data;
      })
    } catch (error) {
      data.push(["서귀포예술단 에러"])
      return data;
    }
  }
}   
