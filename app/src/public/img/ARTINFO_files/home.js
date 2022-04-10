const clickMenu = () => {
    if(document.getElementById('mobileMenu').style.display == "flex") {
        document.getElementById('mobileMenu').style.display="none";
    } else {
        document.getElementById('mobileMenu').style.display="flex";
    }
}

const poster = () => {
    let arr = []
    
    while( arr.length !== 5) {
        let random = Math.floor(Math.random() * 5) + 1;
        if(!arr.includes(random)) {
            arr.push(random)
        }
    }

    document.getElementById('left').innerHTML = `
        <a><img src="img/poster/p${arr[0]}.gif" alt=""></a>
        <a><img src="img/poster/p${arr[1]}.gif" alt=""></a>
    `

    document.getElementById('center').innerHTML = `
        <a><img src="img/poster/p${arr[2]}.gif" alt=""></a>
    `

    document.getElementById('right').innerHTML = `
        <a><img src="img/poster/p${arr[3]}.gif" alt=""></a>
        <a><img src="img/poster/p${arr[4]}.gif" alt=""></a>
    `
}

poster()