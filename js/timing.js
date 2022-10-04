// 公告栏运行时间
// 判断是否有公告栏
window.onload = function(){


if(document.getElementsByClassName('card-widget card-announcement wow animate__zoomIn').length!==0){
    let oSpan = document.getElementsByTagName("timing")[0];
    let localhostTime//获取页面打开的时间

    if(!sessionStorage.getItem("localhostTime"))
    {
        let data = new Date()
        localhostTime = data.getTime();
        sessionStorage.setItem("localhostTime", localhostTime)
    }	
    else{
        localhostTime = sessionStorage.getItem("localhostTime")
    }

    function tow(n) {
        return n >= 0 && n < 10 ? '0' + n : '' + n;
    }
    setInterval(function () {
        let goTime = new Date();//获取动态时间
        let diffTime = goTime.getTime() - localhostTime;
        var second = Math.floor(diffTime / 1000);//未来时间距离现在的秒数
        var day = Math.floor(second / 86400);//整数部分代表的是天；一天有24*60*60=86400秒 ；
        second = second % 86400;//余数代表剩下的秒数；
        var hour = Math.floor(second / 3600);//整数部分代表小时；
        second %= 3600; //余数代表 剩下的秒数；
        var minute = Math.floor(second / 60);
        second %= 60;
        var str = tow(hour) + '<span class="time">小时&nbsp</span>'
            + tow(minute) + '<span class="time">分钟&nbsp</span>'
            + tow(second) + '<span class="time">秒</span>';
        oSpan.innerHTML = "您本次已浏览网页&nbsp" + str;
    }, 1000)
}
}

