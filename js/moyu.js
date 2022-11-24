// const xhr=new XMLHttpRequest()
// xhr.open('get','https://api.vvhan.com/api/moyu?type=json')
// xhr.send()
// xhr.onreadystatechange=function(){
//     if(xhr.readyState === 4){
// 						// 判断响应状态码
// 	    if(xhr.status >=200 && xhr.status <300){
// 		// 响应行
//             let img_url = JSON.parse(xhr.response).url
//             document.getElementById('no-lazy').src = img_url
// 	    }
// 	    else{
		
// 	    }
//     }
// }
$.ajax({
	　　url:'https://api.vvhan.com/api/moyu?type=json',  //请求的URL
	　　timeout : 3000, //超时时间设置，单位毫秒
	　　type : 'get',  //请求方式，get或post
	　　data :{},  //请求所传参数，json格式
	　　dataType:'json',//返回的数据格式
	　　success:function(data){ //请求成功的回调函数
	// 　　　　alert("成功");
			// console.log(data.url)
			document.getElementById('no-lazy').src = data.url
	　　},
	　　complete:function(XMLHttpRequest,status){ //请求完成后最终执行参数
	　　　　if(status=='timeout'){//超时,status还有success,error等值的情况
	// 　　　　　  alert("超时");
			// console.log('失败')
	　　　　}
	　　}
	});
	