var now=new Date;function createtime(){var e=new Date("09/16/2022 00:00:00");now.setTime(now.getTime()+250);var n=(now-e)/1e3/60/60/24,t=Math.floor(n),a=(now-e)/1e3/60/60-24*t,o=Math.floor(a);1==String(o).length&&(o="0"+o);var r=(now-e)/1e3/60-1440*t-60*o,i=Math.floor(r);1==String(i).length&&(i="0"+i);var l=(now-e)/1e3-86400*t-3600*o-60*i,w=Math.round(l);1==String(w).length&&(w="0"+w);let g="";g=`\n    <span class='textTip'>  本站居然运行了 ${t} 天</span>\n    <span id='runtime'> ${o} 小时 ${i} 分 ${w} 秒 </span> `,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=g)}setInterval((()=>{createtime()}),250);