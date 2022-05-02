const clickMenu = () => {
    if(document.getElementById('mobileMenu').style.display == "flex") {
        document.getElementById('mobileMenu').style.display="none";
    } else {
        document.getElementById('mobileMenu').style.display="flex";
    }
}

let signupCheck = "";
let personalInfoCheck = ""; 

document.getElementById('signupCheck').addEventListener('change', () => {
    signupCheck = document.getElementById('signupCheck').checked;
    save();
})

document.getElementById('personalInfoCheck').addEventListener('change', () => {
    personalInfoCheck = document.getElementById('personalInfoCheck').checked;
    save();
})

const button = document.getElementById('pass');
const save = () => {
    if( signupCheck === true && personalInfoCheck === true ) button.removeAttribute('disabled');
    else button.disabled = true;    
}

const signupGet = () => {
    const check = true;
    fetch("/signupGet", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(check),
        }).then(() => {
            window.location = "/signup"
        })
}

document.getElementById('pass').addEventListener('click', () => {
    signupGet();
})

save();