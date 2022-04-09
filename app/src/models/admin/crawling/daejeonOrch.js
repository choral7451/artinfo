const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  DaejeonOrch : async () => { 
    let data = [];
    try {
      return await axios.get('https://dpo.artdj.kr/dpo/?a_idx=06_01')
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
          const getDate = "20"+ getData.find('td:nth-child(3)').text().replace(/\./g,'-');
          const getTitle = getData.find('td:nth-child(2)').find('a').text()
          const getUrl = "https://dpo.artdj.kr/dpo/?a_idx=06_01"
          if(currentDate == getDate) {  
            data.push(["대전시립교향악단", getTitle, getDate, getUrl]);
          }
        }
        return data;
      })
    } catch (error) {
      data.push(["대전시립교향악단 에러"])
      return data;
    }
  }
}   
