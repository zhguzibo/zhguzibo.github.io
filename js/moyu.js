$.ajax({url:"https://api.vvhan.com/api/moyu?type=json",timeout:3e3,type:"get",data:{},dataType:"json",success:function(t){document.getElementById("no-lazy").src=t.url},complete:function(t,e){}});