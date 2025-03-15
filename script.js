// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });


//swiper //

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      320: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  },
});

// menu icon 

document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

var sumit = document.querySelector("#elem-container");
var fixed = document.querySelector(".fixed-image");
sumit.addEventListener("mouseenter",function(){
    fixed.style.display = "block";
    
});
sumit.addEventListener("mouseleave",function(){
    fixed.style.display = "none";
    
});


var elems = document.querySelectorAll(".text-box");
elems.forEach(function(e){
      e.addEventListener("mouseenter", function(){

    
          var image = e.getAttribute("data-image");
         fixed.style.backgroundImage = `url(${image})`
        })  
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


