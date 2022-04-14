function setup() {
  noCanvas(); // get rids of canva
}


  document.getElementById("start").innerHTML = "Press your spacebar to start";

 function keyPressed() {
          if(keyCode == 32) { // when the user clicks their spacebar
              location.replace("https://sanilac6459.github.io/sep11-freedom-project-typing-game/main/index.html")
          }
}