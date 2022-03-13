const getPath = window.location.pathname;
let path = ``;

switch (getPath) {
    case '/' :
        path = `<a href="/"><img src="/img/logo.png" alt=""></a>`;
        break;
    case '/about' :
        path = `<h1>소개</h1>`;
        break;
    case '/recruit_art' :
        path = `<h1>채용정보</h1>`;
        
        break;
    case '/login' :
        path = `<h1>로그인</h1>`;
        break;
}

const mobileHeader = 
    `
        <div class="header1">
            <nav>
                <i class="fa-solid fa-bars" onclick="clickMenu()"></i>
            </nav>
            <div class="logo">
                ${path}
            </div>
            <div class="login"><a href="/login"><i class="fa-regular fa-user"></i></a></div>
        </div>
        <div id="header2" class="header2"> 
            <li><a href="/">Home</a></li>
            <li><a href="/about">소개</a></li>
            <li><a href="/recruit_art">채용정보</a></li>
        </div>        
    ` 



const desktopHeader = 
    `
        <div class="header1">
            <div class="logo">
                <a href="/"><img src="/img/logo.png" alt=""></a>
            </div>
            <nav>
                <li><a href="/about">소개</a></li>
                <li><a href="/recruit_art">채용정보</a></li>
            </nav>
            <div class="login">
                <a href="/login">로그인</a>
            </div>
        </div>
    `


    