const check = document.querySelector('body').getAttribute('id')


switch(check) { 
    case 'checkId' : 
        alert('아이디를 입력해주세요.');
        break
    case 'checkPwd' : 
        alert('비밀번호를 입력해주세요.');
        break    
    case 'nonexistentId' : 
        alert('존재하지 않는 아이디입니다.');
        break    
    case 'reCheckPwd' : 
        alert('비밀번호를 확인해주세요.');
        break        
    case 'signupSuccess' : 
        alert('회원가입에 성공하였습니다.');
        break       
}    



const clickMenu = () => {
    if(document.getElementById('mobileMenu').style.display == "flex") {
        document.getElementById('mobileMenu').style.display="none";
    } else {
        document.getElementById('mobileMenu').style.display="flex";
    }    
}
