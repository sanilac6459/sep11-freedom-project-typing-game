function setup() {
  noCanvas(); // get rids of canva
}

// when user clicks submit after entering their name
document.querySelector("button").addEventListener("click", function(){
  var message = document.getElementById("name").value;
  document.getElementById("demo").innerHTML = "Hello " + message + ", " + "you sure came to the right place to become the world fastest typer! " + "No pressure though, well not yet...";
  document.getElementById("start").innerHTML = "If you're ready, please press your spacebar to start. " + "Good luck!"
});
