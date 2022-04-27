const clickMenu = () => {
    if(document.getElementById('mobileMenu').style.display == "flex") {
        document.getElementById('mobileMenu').style.display="none";
    } else {
        document.getElementById('mobileMenu').style.display="flex";
    }   
}


let pwd;
let pwd2;
document.getElementById('pwd').addEventListener('keyup', (e)=>{
    pwd = e.target.value
    if(pwd != "" ) {
        document.getElementById('checkPassword').innerHTML = `<i class="fa-solid fa-check"></i>`;
    } else {
        document.getElementById('checkPassword').innerHTML = "";
    }

    if(pwd2 != null) {
        if( pwd == pwd2 ) {
            if( pwd === "" || pwd2 === "") {
                document.getElementById('checkPwd').innerHTML = "";
                updateButton()
            } else {
                document.getElementById('checkPwd').innerHTML = `<i class="fa-solid fa-check"></i>`;                
                updateButton()
            }
        } else {
            document.getElementById('checkPwd').innerHTML = `불일치`;
            document.getElementById('checkPwd').style.color = 'red';
            updateButton()
        }        
    }
})

document.getElementById('pwd2').addEventListener('keyup', (e)=>{
    pwd = document.getElementById('pwd').value
    pwd2 = e.target.value;
    if( pwd == pwd2 ) {
        if( pwd === "" || pwd2 === "") {
            document.getElementById('checkPwd').innerHTML = "";
            updateButton()
        } else {
            document.getElementById('checkPwd').innerHTML = `<i class="fa-solid fa-check"></i>`;        
            updateButton()
        }
    } else {
        document.getElementById('checkPwd').innerHTML = `불일치`;
        document.getElementById('checkPwd').style.color = 'red';
        updateButton()
    } 
});

document.getElementById('birth').addEventListener('keyup', (e) => {
    let value = e.target.value;
    if(value.length === 8) {
        document.getElementById('checkBirth').innerHTML = `<i class="fa-solid fa-check"></i>`
        updateButton()
    } else {
        document.getElementById('checkBirth').innerHTML = "확인 필요";
        document.getElementById('checkBirth').style.color = "red";
        updateButton()
    }
})

document.getElementById('email').addEventListener('keyup', (e)=>{
    const email = e.target.value;
    if(email.indexOf('@') != -1 && email.indexOf('.') != -1) {
        document.getElementById('checkEmail').innerHTML = `<i class="fa-solid fa-check"></i>`
        updateButton()
    } else { 
        document.getElementById('checkEmail').innerHTML = "확인 필요"
        document.getElementById('checkEmail').style.color = "red";
        updateButton()
    }
});


document.getElementById('update').addEventListener('click', () => {
    const saveConfirm = confirm('정보를 수정하시겠습니까?');
    if(saveConfirm) {
        updateDo();
    } 
})

window.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        const saveConfirm = confirm('정보를 수정하시겠습니까?');
        if(saveConfirm) {
            updateDo();
        } 
    }
})

const updateDo = () => {
    const id = document.getElementById('idValue').innerText;
    const birth = document.getElementById('birth').value;
    const email = document.getElementById('email').value;    
    const password = document.getElementById('pwd').value;
    const data = [password, id, birth, email]
    
    fetch("/clientInfoUpdate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        }).then(() => {
            window.location = "/"
        })  
}

const updateButton = () => {
    const checkPwd = document.getElementById('checkPwd').innerText
    const checkEmail = document.getElementById('checkEmail').innerText
    const checkBirth = document.getElementById('checkBirth').innerText
    const checkPwdValue = document.getElementById('checkPwd').firstChild

    if(checkEmail !== "확인 필요" && checkBirth !== "확인 필요" && checkPwd !== "불일치" && checkPwdValue !== null) {
        const button = document.getElementById('update')
        button.removeAttribute('disabled');
    } else {
        const button = document.getElementById('update')
        button.disabled = true;
    }
}
