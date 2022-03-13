document.write("<script type='text/javascript' src='/js/headerTemplate.js'><"+"/script>"); 

const inputScreen = () => {
    let innerWidth = window.innerWidth;
    if ( innerWidth < 1182 ) {
        document.getElementById('header').innerHTML = mobileHeader;
    } else {
        document.getElementById('header').innerHTML = desktopHeader;
    }
}

const outputScreen = () => {
    if (self.name != 'reload') {
        self.name = 'reload';
        self.location.reload(true);
    }
    else self.name = '';
    rollingPoster()
    inputScreen()

}

window.onresize = function() {
    if (self.name != 'reload') {
        self.name = 'reload';
        self.location.reload(true);
    }
    else self.name = '';
    inputScreen();
}

let clickMenu = () => {
    if(document.getElementById('header2').style.display == "flex") {
        document.getElementById('header2').style.display="none";
    } else {
        document.getElementById('header2').style.display="flex";
    }
}

let leftNumber = "-20%";
let leftNumberDouble = "-40%";

let innerWidth = window.innerWidth;
if ( innerWidth < 801 ) {
    leftNumber = "-100%";
    leftNumberDouble = "-200%";
} else if ( innerWidth < 1601 && 800 < innerWidth  ) {
    leftNumber = "-33.5%";
    leftNumberDouble = "-67%";
}

let rollingPoster = () => {
    $(document).ready(function() {

        let $poster = $(".posterBack").find("ul");

        //정해진 초마다 함수 실행
        setInterval(function () {
            rollingStart(leftNumber, leftNumberDouble);
        }, 3500);//다음 이미지로 롤링 애니메이션 할 시간차

        function rollingStart(leftNumber, leftNumberDouble) {
            //배너의 좌측 위치를 옮겨 준다.
            $poster.animate({left:leftNumberDouble}, 1000, function () {
                //첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
                $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
                //뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
                $(this).find("li:first").remove();
                //다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
                $(this).css("left", leftNumber );
                //이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
            });
        }
    });
}





const clickLeft = () => {
    $(document).ready(function() {

        let $poster = $(".posterBack").find("ul");

        function rollingStart() {
            //배너의 좌측 위치를 옮겨 준다.
            $poster.animate({left: leftNumberDouble }, 100, function () {
                //첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
                $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
                //뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
                $(this).find("li:first").remove();
                //다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
                $(this).css("left", leftNumber );
                //이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
            });
        }
        rollingStart();
    });
}

const clickRight = () => {
    $(document).ready(function() {
        let $poster = $(".posterBack").find("ul");

        function rollingStart() {
            //배너의 좌측 위치를 옮겨 준다.
            $poster.animate({left: "0"}, 100, function () {
                //첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
                $(this).prepend("<li>" + $(this).find("li:last").html() + "</li>");
                //뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
                $(this).find("li:last").remove();
                //다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
                $(this).css("left", leftNumber );
                //이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
            });
        }
        rollingStart();
    }); 
}