document.write("<script type='text/javascript' src='/js/headerTemplate.js'><"+"/script>"); 

const inputScreen = () => {
    let innerWidth = window.innerWidth;
    if( innerWidth < 1182 ) {
        document.getElementById('header').innerHTML = mobileHeader;
    } else {
        document.getElementById('header').innerHTML = desktopHeader;
    }
}



const saveButton = () => {
    const dataCount = document.getElementById('tbody').childElementCount
    document.getElementById('save').addEventListener('click', () => {
        const checkType = [];
        let checkCount = 0;
        for(let i = 1 ; i <= dataCount*2-1 ; i+=2) {
            checkType.push(
                document.getElementById('tbody').childNodes[i].childNodes[3].innerHTML
            )
        }
        
        for(let i = 0 ; i < dataCount ; i++) {
            if(checkType[i] != 0) {
                checkCount++
            }
        }
        if(checkCount == dataCount) {
            const saveConfirm = confirm('데이터를 저장하시겠습니까?');
            if(saveConfirm) {
            let data = [];
            let content = [];
            let count = 1;
            for(let i = 1 ; i <= dataCount*2-1 ; i+=2) {
                
                for(let j = 1 ; j <= 11 ; j+=2) {                   
                    if ( j == 7){       
                        content.push(
                            document.getElementById('tbody')
                            .childNodes[i]
                            .childNodes[j]
                            .childNodes[1].innerHTML
                        )
                        const href = document.getElementById('tbody')
                        .childNodes[i]
                        .childNodes[j]
                        .childNodes[1]
                        .getAttribute('href')

                        content.push(href)
                    } else {
                        content.push(
                            document.getElementById('tbody')
                            .childNodes[i]
                            .childNodes[j]
                            .innerHTML
                        )
                    }
                }
                data.push(content)
                content = [];
                count++
            }
            console.log(data)
            fetch("/admin/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                }).then(function () {
                    window.location = "/recruit_art/all"
                })
            }
        } else {
            alert('데이터 분류가 정확하지 않습니다.')
        }
        
    })
}

const crawlingButton = () => {
    document.getElementById('crawling').addEventListener('click', () => {
        fetch("/admin/crawling", { method: "POST"})
            .then(function () {
                window.location = "/admin"
            })
    })
}

const outputScreen = () => {
    inputScreen(); 
    saveButton();
    crawlingButton();
};

window.onresize = function() {   
    inputScreen();
}

const clickMenu = () => {
    if(document.getElementById('header2').style.display == "flex") {
        document.getElementById('header2').style.display="none";
    } else {
        document.getElementById('header2').style.display="flex";
    }
    
}
