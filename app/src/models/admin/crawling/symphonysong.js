const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  Symphonysong : async () => { 
    let data = [];
    try {
      return await axios.get('http://symphonysong.com/expo2/wizard/frames/server_sub.html?home_id=symphonysong&menu_seq=61&menu_seq_open=&tic=1648792456&siteId=symphonysong&SITE_ID=symphonysong&boardId=&BOARD_ID=')
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
          const getUrl = "http://symphonysong.com/expo2/wizard/frames/server_sub.html?home_id=symphonysong&menu_seq=61&menu_seq_open=&tic=1648792916&siteId=symphonysong&SITE_ID=symphonysong&boardId=&BOARD_ID="
          if(currentDate == getDate) {  
            data.push(["심포니송", getTitle, getDate, getUrl]);
          }
        }
        return data;
      })
    } catch (error) {
      data.push(["심포니송 에러"])
      return data;
    }
  }
}   
