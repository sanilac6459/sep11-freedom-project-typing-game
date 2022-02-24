
function setup() {
  noCanvas(); // get rids of canva
}

document.querySelector("#name").addEventListener("keyup", function(event){
    // var message = document.getElementById("#name").value;
    // message.innerHTML = "Hello" + name.value;

    var message = document.getElementById("name").value;
    // message.innerHTML = "Hello" + message;
    document.getElementById("demo").innerHTML = "Hello " + message + "! " + "You sure came to the right place to become the world fastest typer";


});


