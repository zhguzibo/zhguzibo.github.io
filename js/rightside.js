window.onscroll = percent;// 执行函数
// 页面百分比
function percent() {
    let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
        result = Math.round(a / b * 100), // 计算百分比
        up = document.querySelector("#go-up"), // 获取按钮
        down = document.querySelector("#go-down"); // 获取按钮
        // document.getElementById('goup').innerText = result
    if (result <= 95) {

        up.childNodes[0].style.display = 'none'
        up.childNodes[1].style.display = down.style.display = 'block'
        up.childNodes[1].innerHTML = result;
    } else {
        up.childNodes[1].style.display = down.style.display = 'none'
        up.childNodes[0].style.display = 'block'
    }
}
