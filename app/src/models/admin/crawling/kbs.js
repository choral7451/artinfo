const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  KBS : async () => { 
    let data = [];
    try {
      return await axios.get('https://www.kbssymphony.org/ko/info/recruit.php')
      .then((html) => {
        
        const $ = cheerio.load(html.data);
        const tbody = $('tbody')
        const today = new Date();  
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const date = ('0' + today.getDate()).slice(-2);
        const currentDate = (year + '-' + month + '-' + date);
          
        for(let i = 1; i <= 10 ; i++) {
          const getData = tbody.find(`tr:nth-child(${i})`)
          const getDate = getData.find('td:nth-child(3)').text()
          const getTitle = getData.find('td:nth-child(2)').text()
          const getUrl = "https://www.kbssymphony.org/" + getData.find('td:nth-child(2)').find('a').attr('href')
          if(currentDate == getDate) {  
            data.push(["KBS교향악단", getTitle, getDate, getUrl]);
          }
        }
        return data;
      })
    } catch (error) {
      data.push(["KBS교향악단 에러"])
      return data;
    }
  }
}   
