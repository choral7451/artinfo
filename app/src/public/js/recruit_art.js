const pageButton = () => {
    const URLSearch = new URLSearchParams(location.search);
    const path = location.pathname;
    const pageNum = document.getElementById('pageNum').firstElementChild.getAttribute('id');
    const count = document.getElementById('pageNum').childElementCount;
    let getQueryString

    document.getElementById('left').addEventListener('click', ()=> {
        if(URLSearch == 0 || URLSearch.get('id') == 1) {
            getQueryString = "1";
        } else {
            getQueryString = URLSearch.get('id')-1;
        }

        document.getElementById('left').setAttribute('href', `http://localhost:3000${path}?id=${getQueryString}`);
    });        

    document.getElementById('right').addEventListener('click', ()=> {
        if(URLSearch == 0) {
            if(count == 1) {
                getQueryString = "1"
            } else {
                getQueryString = "2";
            }            
        } else if (Number(URLSearch.get('id')) >= pageNum) {
            getQueryString = pageNum
        } else {
            getQueryString = Number(URLSearch.get('id'))+1;
        }
        document.getElementById('right').setAttribute('href', `http://localhost:3000${path}?id=${getQueryString}`);
    })

    if(URLSearch.get('id') == null) {
        document.getElementById("pageButton1").style.border = '2px solid black';
    } else {
        const query = "pageButton"+URLSearch.get('id')
        document.getElementById(query).style.border = '2px solid black';
    }
}

const tpyeSelect = () => {
    const url = window.location.pathname
    if ( url == '/recruit_art/all' ) {
        document.getElementById('typeAll').style.border = '2px solid black';
    } else if ( url == '/recruit_art/orchestra') {
        document.getElementById('typeOrchestra').style.border = '2px solid black';
    } else if ( url == '/recruit_art/choir') {
        document.getElementById('typeChoir').style.border = '2px solid black';
    } else if ( url == '/recruit_art/administration') {
        document.getElementById('typeAdministration').style.border = '2px solid black';
    } else if ( url == '/recruit_art/etc') {
        document.getElementById('typeEtc').style.border = '2px solid black';
    }
    
}

tpyeSelect();
pageButton();


const clickMenu = () => {
    if(document.getElementById('mobileMenu').style.display == "flex") {
        document.getElementById('mobileMenu').style.display="none";
    } else {
        document.getElementById('mobileMenu').style.display="flex";
    }    
}


