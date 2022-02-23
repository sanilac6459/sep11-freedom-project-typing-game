
function setup() {
  noCanvas(); // get rids of canva
}

document.querySelector("#name").addEventListener("keyup", function(event){
    var message = document.getElementById("#name").value;
    message.innerHTML = "Hello" + name.value;

});


