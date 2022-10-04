function welcome(){
    

    let welcome_text = '欢迎光顾Gale的小窝~'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你，来自"+referrer.toUpperCase()+"的用户！";
        if(referrer.toUpperCase()==document.domain.toUpperCase())return;
    }
    swal({
        title: " 欢迎！",
        text: welcome_text+'\n打开页面下方音乐以获得更佳体验！',
        imageUrl: "/img/avatar/avatar.png",
        timer: 2000,
        showConfirmButton: false
    });
}


$(document).ready(()=>{
    var urlinfo = window.location.pathname;

    let welcomeCheck = sessionStorage.getItem("welcomeCheck")
    urlinfo = decodeURIComponent(urlinfo)
    if (urlinfo == '/'){
        if(!welcomeCheck) welcome()
        sessionStorage.setItem("welcomeCheck", true)
    }
})

