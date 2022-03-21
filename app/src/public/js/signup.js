document.write("<script type='text/javascript' src='/js/headerTemplate.js'><"+"/script>"); 

const inputScreen = () => {
    let innerWidth = window.innerWidth;
    if( innerWidth < 1182 ) {
        document.getElementById('header').innerHTML = mobileHeader;
    } else {
        document.getElementById('header').innerHTML = desktopHeader;
    }
}

const outputScreen = () => {
    inputScreen();
};

window.onresize = function() {   
    inputScreen();
}

const clickMenu = () => {
    if(document.getElementById('header2').style.display == "flex") {
        document.getElementById('header2').style.display="none";
    } else {
        document.getElementById('header2').style.display="flex";
    }
    
}
