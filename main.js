
//Mostrar y ocultar los parrafos de los logos

  $("#logo1").click(function(){
    $("#parrafoParabenos").fadeToggle("slow");
  });


  $("#logo2").click(function(){
    $("#parrafoSiliconas").fadeToggle("slow");
  });


  $("#logo3").click(function(){
    $("#parrafoNatural").fadeToggle("slow");
  });

//Modales de los productos

//SHAMPOOS 
// Get the modal
var modal = document.getElementById("shampoos");

// Get the button that opens the modal
var btn = document.getElementById("shampooBoton");
var span = document.getElementsByClassName("cerrar")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//ACONDICIONADOR

// Get the modal
var modal = document.getElementById("acondicionadores");

// Get the button that opens the modal
var btn = document.getElementById("acondicionadorBoton");
var span = document.getElementsByClassName("cerrarDos")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//JABON

// Get the modal
var modal = document.getElementById("jabones");

// Get the button that opens the modal
var btn = document.getElementById("jabonBoton");
var span = document.getElementsByClassName("cerrarTres")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//CREMAS

// Get the modal
var modal = document.getElementById("cremas");

// Get the button that opens the modal
var btn = document.getElementById("cremaBoton");
var span = document.getElementsByClassName("cerrarCuatro")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Slider de las marcas

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("sliderCinco");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}