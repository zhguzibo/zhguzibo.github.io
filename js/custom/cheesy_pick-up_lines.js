function cheesy_pick_up_lines(){let e="";fetch("https://api.vvhan.com/api/love").then((e=>e.text())).then((c=>{c.length<40?(e+="<p>"+c+"</p>",document.querySelector("#cheesy_pick-up_lines-container").innerHTML=e):cheesy_pick_up_lines()})).catch((function(e){console.log(e)}))}cheesy_pick_up_lines();