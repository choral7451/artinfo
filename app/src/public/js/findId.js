const clickMenu = () => {
    if(document.getElementById('mobileMenu').style.display == "flex") {
        document.getElementById('mobileMenu').style.display="none";
    } else {
        document.getElementById('mobileMenu').style.display="flex";
    }   
}

const findID = () => {
    const name = document.getElementById('nameInput').value
    const email = document.getElementById('emailInput').value
    const data = [name, email]
    fetch("/findId", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        }).then(res => res.json())
        .then(res => {
            if(res[0] !== undefined) {
                let result = ``
                for(let data of res) {
                    let updatedData = JSON.stringify(data.ID).replace(/\"/gi, "");
                    const replaceAt = (input, index, character) => {
                        return input.substr(0, index) + character;
                    }
                    let star = ""
                    const startCount = updatedData.length-Math.ceil(updatedData.length/2)
                    for(let i = 0 ; i < startCount ; i++) {
                        star += "*"
                    }

                    updatedData = replaceAt(updatedData, Math.ceil(updatedData.length/2), star);

                    result += `<div class="resultId">${updatedData}</div>`
                }             
                document.getElementById('inputBack').style.display="none";
                document.getElementById('resultIdBack').innerHTML = result;
                document.getElementById('result').style.display="flex";
                document.getElementById('findIdButton').style.display="none";
            } else {
                alert("해당 아이디가 존재하지 않습니다.")
            }
            
        });
}

document.getElementById('findIdButton').addEventListener('click', () => {
    findID()
})

window.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
       findID()
    }
})


