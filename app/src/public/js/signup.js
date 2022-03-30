document.getElementById('checkId').addEventListener('click', (e) => {
    const value = [document.getElementById('checkIdInput').value];    
    if(value != 0) {
        if(value[0].length > 3 && value[0].length < 17 ) {
            fetch("/signup_checkId", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(value),
                }).then(res => res.text())
                .then((text) => {
                    if(text == 0) {
                        alert('사용 가능한 아이디입니다.')
                        document.getElementById('checkIdText').innerHTML = "확인";
                        signupButton()
                    } else {
                        alert('이미 존재하는 아이디입니다.')
                        document.getElementById('checkIdInput').value = "";
                        document.getElementById('checkIdText').innerHTML = "";
                    }
                });
        } else {
            alert("아이디 글자 수를 확인해주세요.")
            document.getElementById('checkIdInput').value = "";
            document.getElementById('checkIdText').innerHTML = "";
        }
    } else {
        alert('아이디를 입력해주세요.')
        document.getElementById('checkIdText').innerHTML = "";
    }
    
})

document.getElementById('checkIdInput').addEventListener('keyup', (e) => {
    if(document.getElementById('checkIdText').innerText == "확인") {
        document.getElementById('checkIdText').innerHTML = "";
    }
})

let pwd;
let pwd2;
document.getElementById('pwd').addEventListener('keyup', (e)=>{
    pwd = e.target.value
    if(pwd != 0) {
        document.getElementById('checkPassword').innerHTML = "확인"
    } else {
        document.getElementById('checkPassword').innerHTML = "";
    }

    if(pwd2 != null) {
        if( pwd == pwd2 ) {
            document.getElementById('checkPwd').innerHTML = `일치`;
            document.getElementById('checkPwd').style.color = 'black';
            signupButton()
        } else {
            document.getElementById('checkPwd').innerHTML = `불일치`;
            document.getElementById('checkPwd').style.color = 'red';
        }        
    }
})

document.getElementById('pwd2').addEventListener('keyup', (e)=>{
    pwd = document.getElementById('pwd').value
    pwd2 = e.target.value;
    if( pwd == pwd2 ) {
        document.getElementById('checkPwd').innerHTML = `일치`;
        document.getElementById('checkPwd').style.color = 'black';
        signupButton()
    } else {
        document.getElementById('checkPwd').innerHTML = `불일치`;
        document.getElementById('checkPwd').style.color = 'red';
    }
});

document.getElementById('nameValue').addEventListener('keyup', (e)=>{
    const value = e.target.value
    if(value != 0) {
        document.getElementById('checkName').innerHTML = "확인";
    } else {
        document.getElementById('checkName').innerHTML = "";
    }
})

document.getElementById('birth').addEventListener('keyup', (e) => {
    let value = e.target.value;
    if(value.length == 8) {
        document.getElementById('checkBirth').innerHTML = "확인";
        document.getElementById('checkBirth').style.color = "black";
        signupButton()
    } else {
        document.getElementById('checkBirth').innerHTML = "확인 필요";
        document.getElementById('checkBirth').style.color = "red";
    }
})

document.getElementById('gender').addEventListener('focusout', ()=>{
    let target = document.getElementById('gender').value;
    if( target == 0) {
        document.getElementById('checkGender').innerHTML = '확인 필요'
        document.getElementById('checkGender').style.color = 'red';
    } else {
        document.getElementById('checkGender').innerHTML = '확인'
        document.getElementById('checkGender').style.color = 'black';
        signupButton()
    }
})

document.getElementById('emailValue').addEventListener('keyup', (e)=>{
    
    const email = e.target.value;
    if(email.indexOf('@') != -1 && email.indexOf('.') != -1) {
        document.getElementById('checkEmail').innerHTML = "확인"
        document.getElementById('checkEmail').style.color = "black";
        signupButton()
    } else { 
        document.getElementById('checkEmail').innerHTML = "확인 필요"
        document.getElementById('checkEmail').style.color = "red";
    }
});

const signupButton = () => {
    const checkID = document.getElementById('checkIdText').innerText
    const checkPwd = document.getElementById('checkPwd').innerText
    const checkName = document.getElementById('checkName').innerText
    const checkGender = document.getElementById('checkGender').innerText
    const checkBirth = document.getElementById('checkBirth').innerText
    const checkEmail = document.getElementById('checkEmail').innerText


    if(checkID == "확인" && checkPwd == "일치" && checkName == "확인" && checkGender == "확인" && checkBirth == "확인" && checkEmail == "확인") {
        const button = document.getElementById('signupButton')
        button.removeAttribute('disabled');
    }
}


const clickMenu = () => {
    if(document.getElementById('mobileMenu').style.display == "flex") {
        document.getElementById('mobileMenu').style.display="none";
    } else {
        document.getElementById('mobileMenu').style.display="flex";
    }    
}
