
var a = new Audio("https://dl.dropbox.com/s/e93f5kxsmtankf3/Best%20Happy%20Birthday%20To%20You%20_%20Happy%20Birthday%20Songs%20Remix%202020%28M4A_128K%29_1.m4a?dl=0");

window.addEventListener('click', () => {
  a.play();
});

function start() {
  var clab = document.querySelector("#clab")
  clab.style.display = "block"; //display set to block
  document.getElementById("loader").style.background = "transparent";
  document.getElementById("loader").style.display = "none";
  document.getElementById("loader").style.transition = "2s";
  document.getElementById("loader").innerHTML = " "; //set innerHTML to empty string
}

setInterval(start, 3000);
