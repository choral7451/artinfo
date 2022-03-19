const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  Anyang : async () => { 
    let data = [];
    try {
      return await axios.get('https://www.anyang.go.kr/acc/selectBbsNttList.do?bbsNo=335&key=2166')
      .then((html) => {
        const $ = cheerio.load(html.data);
        const tbody = $('tbody')
        const today = new Date();  
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const date = ('0' + today.getDate()).slice(-2);
        // const currentDate = (year + '-' + month + '-' + date);

        const currentDate = "2022-03-03"
          
        for(let i = 1; i <= 5 ; i++) {
          const getData = tbody.find(`tr:nth-child(${i})`)
          const getDate = getData.find('td:nth-child(5)').find('time').text()
          const getTitle = getData.find('td:nth-child(2)').find('a').text()
          const getUrl = getData.find('td:nth-child(2)').find('a').attr('href')
          if(currentDate == getDate) {  
            data.push(["안양시립합창단", getTitle, getDate, getUrl]);
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
