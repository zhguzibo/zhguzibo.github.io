// 底部本站运行时间
var now=new Date;function createtime(){
    var grt=new Date("09/16/2022 00:00:00");
    now.setTime(now.getTime()+250);
    var days=(now-grt)/1e3/60/60/24,dnum=Math.floor(days),hours=(now-grt)/1e3/60/60-24*dnum,hnum=Math.floor(hours);1==String(hnum).length&&(hnum="0"+hnum);
    var minutes=(now-grt)/1e3/60-1440*dnum-60*hnum,mnum=Math.floor(minutes);1==String(mnum).length&&(mnum="0"+mnum);
    var seconds=(now-grt)/1e3-86400*dnum-3600*hnum-60*mnum,snum=Math.round(seconds);1==String(snum).length&&(snum="0"+snum);let currentTimeHtml="";
    currentTimeHtml=`
    <span class='textTip'>  本站居然运行了 ${dnum} 天</span>
    <span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> `,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=currentTimeHtml)}setInterval(()=>{createtime()},250);

    