const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  Nck_artist : async () => {
    let data = [];
    try {
      return await axios.get('http://nationalchorus.or.kr/notice-2/?mode=list&board_name=notice_new&order_by=fn_pid&order_type=desc&category1=&category2=&category3=&search_field=fn_title&search_text=%EB%8B%A8%EC%9B%90')
      .then((html) => {
        
          const $ = cheerio.load(html.data);
          const tbody = $('tbody#notice_new_board_body')
          const today = new Date();  
          const year = today.getFullYear(); // 년도
          const month = ('0' + (today.getMonth() + 1)).slice(-2);
          const date = ('0' + today.getDate()).slice(-2);
          // const currentDate = (year + '-' + month + '-' + date);

          const currentDate = "2022-03-18"

          for(let i = 1; i <= 5 ; i++) {
            const getData = tbody.find(`tr:nth-child(${i})`)
            const getDate = getData.find('td:nth-child(4)').text()
            const getTitle = getData.find('td:nth-child(2)').text()
            const getUrl = getData.find('td:nth-child(2)').find('a').attr('href')
            if(currentDate == getDate) {  
              data.push(["국립합창단", getTitle, getDate, getUrl]);
            }
          }
          console.log(" nck_artist :"  + data)
          return data;
      })
    } catch (error) {
      data.push(["Nck_artist 에러"])
      return data;
    }
  }
}

