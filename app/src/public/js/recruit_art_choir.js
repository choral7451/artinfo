const pageButton = () => {
    const URLSearch = new URLSearchParams(location.search);
    const pageNum = document.getElementById('pageNum').firstElementChild.getAttribute('id')
    let getQueryString;

    document.getElementById('left').addEventListener('click', ()=> {
        if(URLSearch == 0 || URLSearch.get('id') == 1) {
            getQueryString = "1";
        } else {
            getQueryString = URLSearch.get('id')-1;
        }

        document.getElementById('left').setAttribute('href', `http://localhost:3000/recruit_art/choir?id=${getQueryString}`);
    });        

    document.getElementById('right').addEventListener('click', ()=> {
        if(URLSearch == 0) {
            getQueryString = "2";
        } else if (Number(URLSearch.get('id')) >= pageNum) {    
            getQueryString = pageNum
        } else {
            getQueryString = Number(URLSearch.get('id'))+1;
        }
        document.getElementById('right').setAttribute('href', `http://localhost:3000/recruit_art/choir?id=${getQueryString}`);
    })

    if(URLSearch.get('id') == null) {
        document.getElementById("pageButton1").style.border = '2px solid black';
    } else {
        const query = "pageButton"+URLSearch.get('id')
        document.getElementById(query).style.border = '2px solid black';
    }
}

const tpyeSelect = () => {
    document.getElementById('typeChoir').style.border = '2px solid black';
}

const outputScreen = () => {
    pageButton();
    tpyeSelect();
};

const clickMenu = () => {
    if(document.getElementById('mobileMenu').style.display == "flex") {
        document.getElementById('mobileMenu').style.display="none";
    } else {
        document.getElementById('mobileMenu').style.display="flex";
    }    
}

