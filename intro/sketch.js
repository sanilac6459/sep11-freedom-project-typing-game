function setup() {
  noCanvas(); // get rids of canva
}

// when user clicks submit after entering their name
document.addEventListener("click", function(){
  // var message = document.getElementById("name").value;
  document.getElementById("demo").innerHTML = "Hello! You sure came to the right place to become the world fastest typer! No pressure though, well not yet...";
  document.getElementById("start").innerHTML = "If you're ready, please press your spacebar to start. " + "Good luck!"
});

 function keyPressed() {
          if(keyCode == 32) { // when the user clicks their spacebar
              location.replace("https://www.deltamath.com/")
          }
}