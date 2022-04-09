const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  JeonjuArt : async () => { 
    let data = [];
    try {
      return await axios.get('http://daum.jeonju.go.kr/bbs/board.php?bo_id=job')
      .then((html) => {
        
        const $ = cheerio.load(html.data);
        const tbody = $('ul')
        const today = new Date();  
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const date = ('0' + today.getDate()).slice(-2);
        const currentDate = (year + '-' + month + '-' + date);

        for(let i = 1; i <= 5 ; i++) {
          const getData = tbody.find(`li:nth-child(${i})`)
          const getDate = getData.find('div:nth-child(4)').text().replace(/\./g,'-');
          const getTitle = getData.find('div:nth-child(2)').find('a').text();
          const getUrl = getData.find('div:nth-child(2)').find('a').attr('href');
          console.log(getDate)
          if(currentDate == getDate) {  
            data.push(["전주시립예술단", getTitle, getDate, getUrl]);
          }
        }
        return data;
      })
    } catch (error) {
      data.push(["전주시립예술단 에러"])
      return data;
    }
  }
}   
