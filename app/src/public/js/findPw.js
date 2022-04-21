const clickMenu = () => {
    if(document.getElementById('mobileMenu').style.display == "flex") {
        document.getElementById('mobileMenu').style.display="none";
    } else {
        document.getElementById('mobileMenu').style.display="flex";
    }   
}

const findPw = () => {
    const id = document.getElementById('idInput').value
    const name = document.getElementById('nameInput').value
    const email = document.getElementById('emailInput').value
    const data = [id, name, email]
    fetch("/findPw", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        }).then(res => res.json())
        .then(res => {
            if(res[0] !== undefined) {
                alert("임시 비밀번호가 메일로 전송되었습니다.")
                window.location = "/login"
            } else {
                document.getElementById('idInput').value = "";
                document.getElementById('nameInput').value = "";
                document.getElementById('emailInput').value = "";
                alert("해당 유저가 존재하지 않습니다.")
            }
        });
}

document.getElementById('findPwButton').addEventListener('click', () => {
    findPw()
})

window.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
       findPw()
    }
})
