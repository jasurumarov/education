// DARK LIGHT //////////////////

let search = document.getElementById("search");
var label = document.querySelector(".search-container");

search.addEventListener("click", function () {
  label.classList.toggle("search-active");
}); 

// HEADER BURGER MENU /////////////////////////

const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
    document.body.classList.toggle("menu-opened")
});


// NAVBAR SHRINK /////////////////////////////

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

// BACKTOP

window.addEventListener('scroll', function () {
  toggleBacktop();
});

let backtop = document.getElementById('backtop');

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = '20px';
  } else {
    backtop.style.bottom = '-60px';
  }
}

// DARK MODE 

let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});