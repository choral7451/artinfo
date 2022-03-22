document.getElementById('checkId').addEventListener('click', () => {
    const value = [document.getElementById('checkIdInput').value];
    if(value != 0) {
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
                } else {
                    alert('이미 존재하는 아이디입니다.')
                }
            });
    } else {
        alert('아이디를 입력해주세요.')
    }
    
})

let pwd;
let pwd2;
document.getElementById('pwd').addEventListener('keyup', (e)=>{
    pwd = e.target.value
    if(pwd2 != null) {
        if( pwd == pwd2 ) {
            document.getElementById('checkPwd').innerHTML = `일치`;
            document.getElementById('checkPwd').style.color = 'black';
        } else {
            document.getElementById('checkPwd').innerHTML = `불일치`;
            document.getElementById('checkPwd').style.color = 'red';
        }
    }
})

document.getElementById('pwd2').addEventListener('keyup', (e)=>{
    pwd = document.getElementById('pwd').value
    pwd2 = e.target.value;
    console.log(pwd)
    console.log(pwd2)
    if( pwd == pwd2 ) {
        document.getElementById('checkPwd').innerHTML = `일치`;
        document.getElementById('checkPwd').style.color = 'black';
    } else {
        document.getElementById('checkPwd').innerHTML = `불일치`;
        document.getElementById('checkPwd').style.color = 'red';
    }
});

document.getElementById('birth').addEventListener('keyup', (e) => {
    let value = e.target.value;
    console.log(value)
    if(value.length == 8) {
        document.getElementById('checkBirth').innerHTML = "확인";
        document.getElementById('checkBirth').style.color = "black";
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
    }
})


const clickMenu = () => {
    if(document.getElementById('mobileMenu').style.display == "flex") {
        document.getElementById('mobileMenu').style.display="none";
    } else {
        document.getElementById('mobileMenu').style.display="flex";
    }    
}
