document.write("<script type='text/javascript' src='/js/headerTemplate.js'><"+"/script>"); 

const typeButton = document.querySelectorAll('.type');
typeButton.forEach((type) => {
    type.addEventListener('click', ()=> {
        fetch('/recruit_art', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                type: type.getAttribute('id'),
            }),
        })
            .then(async (response) => {
                
                const data = await response.json();
        
                // 반응형 데스크탑 화면을 구성하는 작업
                let desktopMain = `
                <table> 
                    <thead>
                        <tr>
                            <td>번호</td>
                            <td>단체명</td>
                            <td>제목</td>
                            <td>게시일</td>
                        </tr>
                    </thead> 
                    <tbody>
                `;
                
                for( const list of data ) {
                    desktopMain += `
                        <tr>
                            <td>${list.ID}</td>
                            <td>${list.CNAME}</td>
                            <td>${list.TITLE}</td>
                            <td>${list.DATE}</td>
                        </tr>                    
                    `
                }
        
                desktopMain += `
                    </tbody>
                </table>
                `
        
                // 반응형 모바일 화면을 구성하는 작업
                let mobileMain = `
                <table>
                    <thead>
                        <tr>
                            <td>단체명</td>
                            <td>제목</td>
                        </tr>
                    </thead>
                    <tbody>
                `;
        
                for( const list of data ) {
                    mobileMain += `
                    <tr>
                        <td>${list.CNAME}</td>
                        <td rowspan='2'>${list.TITLE}</td>
                    </tr>
                    <tr>
                        <td>${list.DATE}</td>
                    </tr>                   
                    `
                }
        
                mobileMain += `
                    </tbody>
                </table>
                `
        
                let pageNumber = "";
        
                for(let i = 1 ; i <= (data[0].ID/10)+1 ; i++) {
                    pageNumber +=
                    `<form action="/recruit_art" method="get">
                        <input type="hidden" name="id" value="`+i+`">
                        <button id="pageButton`+i+`">`+i+`</button>
                    </form>`;
                }
        
                
                document.getElementById('pageNum').innerHTML = pageNumber;
        
                // 화면 크기에 따른 소스 실행
                const inputScreen = () => {
                    let innerWidth = window.innerWidth;
                    if( innerWidth < 1182 ) {
                        document.getElementById('header').innerHTML = mobileHeader;
                        document.getElementById('board').innerHTML = mobileMain;
                    } else {
                        document.getElementById('header').innerHTML = desktopHeader;
                        document.getElementById('board').innerHTML = desktopMain;
                    }
                }
        
                window.onresize = function() {   
                    inputScreen();
                }
        
                if(data != null ) {
                    inputScreen();
                }
        
                // 채용정보 분류 타이틀 CSS적용
            
                const getPath = window.location.pathname;
                if(getPath == "/recruit_art") {
                    document.getElementById("art").style.fontWeight = "bold";
                } else {
                    document.getElementById("religion").style.fontWeight = "bold";
                }
                
            })
            .catch((error) => {
                console.error(`Occured exception: ${error}`);
            });
        
    })
})

// 모바일 메뉴클릭 화면 설정 
const clickMenu = () => {
    if(document.getElementById('header2').style.display == "flex") {
        document.getElementById('header2').style.display="none";
    } else {
        document.getElementById('header2').style.display="flex";
    }
}


fetch('/recruit_art', {
    method: "POST",
})
    .then(async (response) => {
        
        const data = await response.json();

        // 반응형 데스크탑 화면을 구성하는 작업
        let desktopMain = `
        <table> 
            <thead>
                <tr>
                    <td>번호</td>
                    <td>단체명</td>
                    <td>제목</td>
                    <td>게시일</td>
                </tr>
            </thead> 
            <tbody>
        `;
        
        for( const list of data ) {
            desktopMain += `
                <tr>
                    <td>${list.ID}</td>
                    <td>${list.CNAME}</td>
                    <td>${list.TITLE}</td>
                    <td>${list.DATE}</td>
                </tr>                    
            `
        }

        desktopMain += `
            </tbody>
        </table>
        `

        // 반응형 모바일 화면을 구성하는 작업
        let mobileMain = `
        <table>
            <thead>
                <tr>
                    <td>단체명</td>
                    <td>제목</td>
                </tr>
            </thead>
            <tbody>
        `;

        for( const list of data ) {
            mobileMain += `
            <tr>
                <td>${list.CNAME}</td>
                <td rowspan='2'>${list.TITLE}</td>
            </tr>
            <tr>
                <td>${list.DATE}</td>
            </tr>                   
            `
        }

        mobileMain += `
            </tbody>
        </table>
        `

        let pageNumber = "";

        for(let i = 1 ; i <= (data[0].ID/10)+1 ; i++) {
            pageNumber +=
            `<form action="/recruit_art" method="get">
                <input type="hidden" name="id" value="`+i+`">
                <button id="pageButton`+i+`">`+i+`</button>
            </form>`;
        }

        
        document.getElementById('pageNum').innerHTML = pageNumber;

        // 화면 크기에 따른 소스 실행
        const inputScreen = () => {
            let innerWidth = window.innerWidth;
            if( innerWidth < 1182 ) {
                document.getElementById('header').innerHTML = mobileHeader;
                document.getElementById('board').innerHTML = mobileMain;
            } else {
                document.getElementById('header').innerHTML = desktopHeader;
                document.getElementById('board').innerHTML = desktopMain;
            }
        }

        window.onresize = function() {   
            inputScreen();
        }

        if(data != null ) {
            inputScreen();
        }

        // 채용정보 분류 타이틀 CSS적용
    
        const getPath = window.location.pathname;
        if(getPath == "/recruit_art") {
            document.getElementById("art").style.fontWeight = "bold";
        } else {
            document.getElementById("religion").style.fontWeight = "bold";
        }
        
    })
    .catch((error) => {
        console.error(`Occured exception: ${error}`);
    });







