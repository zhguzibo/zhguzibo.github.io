const xhr=new XMLHttpRequest()
xhr.open('get','https://api.vvhan.com/api/moyu?type=json')
xhr.send()
xhr.onreadystatechange=function(){
    if(xhr.readyState === 4){
						// 判断响应状态码
	    if(xhr.status >=200 && xhr.status <300){
		// 响应行
            let img_url = JSON.parse(xhr.response).url
            document.getElementById('no-lazy').src = img_url
	    }
	    else{
		
	    }
    }
}
