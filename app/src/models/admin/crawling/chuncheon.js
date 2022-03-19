const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  Chuncheon : async () => { 
    let data = [];
    try {
      return await axios.get('https://www.cccf.or.kr/Art/S30000/S30400/boardList')
      .then((html) => {
          
          const $ = cheerio.load(html.data);
          const tbody = $('tbody')
          const today = new Date();  
          const year = today.getFullYear(); // 년도
          const month = ('0' + (today.getMonth() + 1)).slice(-2);
          const date = ('0' + today.getDate()).slice(-2);
          const currentDate = (year + '-' + month + '-' + date);
            
          for(let i = 1; i <= 8 ; i++) {
            const getData = tbody.find(`tr:nth-child(${i})`)
            let getDate = getData.find('td:nth-child(6)').text()
            const replaceAll = (getDate, searchStr, replaceStr) => {
              return getDate.split(searchStr).join(replaceStr);
            }
            getDate = replaceAll(getDate, '.', '-');
            const getTitle = getData.find('td:nth-child(3)').find('a').text()
            const getUrl = "https://www.cccf.or.kr/Art/S30000/S30400/" + getData.find('td:nth-child(3)').find('a').attr('href')
            if(currentDate == getDate) {  
              data.push(["춘천시립예술단", getTitle, getDate, getUrl]);
            }
          }
          return data;
      })
    } catch (error) {
      data.push(["chuncheon 에러"])
      return data;
    }
  }
}   
