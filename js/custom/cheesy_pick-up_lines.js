function cheesy_pick_up_lines() {
    let html = "";
    fetch("https://api.vvhan.com/api/love")
      .then((data) => data.text())
      .then((data) => {
        if(data.length<40){
          html += "<p>" + data + "</p>";
          document.querySelector("#cheesy_pick-up_lines-container").innerHTML =
          html;
        }
        else cheesy_pick_up_lines()
        
      })
      .catch(function (error) {
        console.log(error);
      });
}
  
cheesy_pick_up_lines();