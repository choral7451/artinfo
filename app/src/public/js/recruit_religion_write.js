document.getElementById('salaryType').addEventListener('change', (e) => {
    const value = e.target.value
    if(value == 'won') {
        document.getElementById('inputSalary').style.display = "flex";
    } else {
        document.getElementById('inputSalary').style.display = "none";
    }
    
})

const maxLengthCheck = (object) => {
    if (object.value.length > object.maxLength){
        object.value = object.value.slice(0, object.maxLength);
    }    
}

const inputNumberAutoComma = (obj) => {
    
    var number = obj.value;
    var integer = obj.value;
    var point = number.indexOf(".");
    var decimal = "";
    var chekcd = "";

    // 첫번째 수부터 소수점 기호( . )를 사용 방지
    if(number.charAt(0) == ".") {
        alert("첫번째 수부터 소수점 기호( . )를 사용할 수 없습니다.");
        obj.value = "";
        return false;
    }
    
    // 소수점이 존재하면 태우는 분기
    if(point > 0) {

        // 소수점 앞 자리값만을 따로 담는다.
        integer = number.substr(0, point);

        // 소수점 아래 자리값만을 따로 담는다.
        decimal = number.substr((point + 1), number.length);
        chekcd = inputNumberisFinit(decimal);

        if(chekcd == "N") {
            alert("문자는 입력하실 수 없습니다.");
            obj.value = "";
            return false;
        }
    }

    // 정수형의 콤마를 제거한다.
    integer = integer.replace(/\,/g, "");
    chekcd = inputNumberisFinit(integer);

    if(chekcd == "N") {
        alert("문자는 입력하실 수 없습니다.");
        obj.value = "";
        return false;
    }

    // 정수형을 한번더 점검한다.
    integer = inputNumberWithComma(inputNumberRemoveComma(integer));
    
    // 소수가 존재하면 나누었던 콤마 기호를 삽입한다.
    if(point > 0) {
        obj.value = integer + "." + decimal;
    }
    
    // 소수가 존재하지 않는다면 콤마값을 넣은 정수만 삽입한다.
    else {
        obj.value = integer;
    }
}

// 천단위 이상의 숫자에 콤마( , )를 삽입하는 함수
const inputNumberWithComma = (str) => {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}

// 콤마( , )가 들어간 값에 콤마를 제거하는 함수
const inputNumberRemoveComma = (str) => {
    str = String(str);
    return str.replace(/[^\d]+/g, "");
}

// 문자 여부를 확인하고 문자가 존재하면 N, 존재하지 않으면 Y를 리턴한다.
const inputNumberisFinit = (str) => {
    if(isFinite(str) == false) {
        return "N";
    } else {
        return "Y";
    }
}

document.getElementById('phonenumber').addEventListener('focusout', (e) => {
    const value= e.target.value;
})


const clickMenu = () => {
    if(document.getElementById('mobileMenu').style.display == "flex") {
        document.getElementById('mobileMenu').style.display="none";
    } else {
        document.getElementById('mobileMenu').style.display="flex";
    }    
}
