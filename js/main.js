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

// OWL CAROUSEL 

      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });