const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  Seongnam : async () => { 
    let data = [];
    try {
      return await axios.get('https://art.seongnam.go.kr:10021/contents/content.php?cIdx=39&fboard=board_news&actionMode=list&searchOpt2=')
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
          const getTitle = getData.find('td:nth-child(3)').find('a').text()
          const getUrl = "https://art.seongnam.go.kr:10021/contents/content.php" + getData.find('td:nth-child(3)').find('a').attr('href')
          if(currentDate == getDate) {  
            data.push(["성남시립예술단", getTitle, getDate, getUrl]);
          }
        }
        return data;
      })
    } catch (error) {
      data.push(["seongnam 에러"])
      return data;
    }
  }
}   
