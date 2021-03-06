document.getElementById('loginBtn').addEventListener('click', () => {
    const getId = document.getElementById('idInput').value
    const getPwd = document.getElementById('pwdInput').value
    const data = [getId, getPwd]
    if(getId == "") {
        alert('아이디를 입력해주세요.')
    } else if(getPwd == ""){
        alert('비밀번호를 입력해주세요.')
    } else {
        fetch("/login_check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),            
            }).then(res => res.text())
              .then((text) => {
                switch (text) {
                    case 'checkId' :
                        alert('존재하지 않는 아이디입니다.')
                        break
                    case 'checkPwd' :
                        alert('비밀번호가 일치하지 않습니다.')
                        break   
                    case 'loginSuccess' :
                        window.location = "/"
                        break   
                }               
              })
    }
})

const clickMenu = () => {
    if(document.getElementById('mobileMenu').style.display == "flex") {
        document.getElementById('mobileMenu').style.display="none";
    } else {
        document.getElementById('mobileMenu').style.display="flex";
    }    
}
