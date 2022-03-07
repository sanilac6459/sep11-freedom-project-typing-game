function setup() {
  noCanvas(); // get rids of canva
}


  document.getElementById("start").innerHTML = "Press your spacebar to start";

 function keyPressed() {
          if(keyCode == 32) { // when the user clicks their spacebar
              location.replace("https://www.deltamath.com/")
          }
}