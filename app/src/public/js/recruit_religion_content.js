const textarea = document.getElementById('textarea')
textarea.style.height = (textarea.scrollHeight + 12) + 'px';

document.getElementById('getList').addEventListener('click', () => {
    fetch("/recruit_religion/all")
            .then(function() {
                window.location = "/recruit_religion/all"
            })
})

document.getElementById('deleteContent').addEventListener('click', () => {

    const URLSearch = new URLSearchParams(location.search);
    const id = [URLSearch.get('id')];
    const saveConfirm = confirm('게시글을 삭제하시겠습니까?');
    if(saveConfirm) {
    fetch("/recruit_religion/delete", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
        }).then( function() {
            window.location = "/recruit_religion/all"
        })
    } 
})

const clickMenu = () => {
    if(document.getElementById('mobileMenu').style.display == "flex") {
        document.getElementById('mobileMenu').style.display="none";
    } else {
        document.getElementById('mobileMenu').style.display="flex";
    }    
}
