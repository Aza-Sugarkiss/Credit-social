// NAVBAR
window.onscroll = function(){myFunction()};


var navbar = document.getElementById("nav-bar");


var sticky = navbar.offsetTop;


function myFunction(){
    if (window.pageYOffset >= sticky){
      navbar.classList.add("sticky")
    }
    else{
      navbar.classList.remove("sticky");
    }
}
// FIN NAVBAR


//   BURGER
function openNav(){
    document.getElementById("menuburger").style.width = "250px";
}
  
function closeNav(){
    document.getElementById("menuburger").style.width = "0";
}
// FIN BURGER