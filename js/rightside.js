function percent(){let e=document.documentElement.scrollTop||window.pageYOffset,t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-document.documentElement.clientHeight,o=Math.round(e/t*100),d=document.querySelector("#go-up"),l=document.querySelector("#go-down");o<=95?(d.childNodes[0].style.display="none",d.childNodes[1].style.display=l.style.display="block",d.childNodes[1].innerHTML=o):(d.childNodes[1].style.display=l.style.display="none",d.childNodes[0].style.display="block")}window.onscroll=percent;