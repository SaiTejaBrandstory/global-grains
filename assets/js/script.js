document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const logoContainer = document.querySelector(".logo-container");
        if (window.scrollY > 50) {
            logoContainer.classList.add("shadow");
        } else {
            logoContainer.classList.remove("shadow");
        }
    });
});

document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".faq-item").forEach(item => {
            if (item !== this.parentElement) {
                item.classList.remove("active");
            }
        });
        this.parentElement.classList.toggle("active");
    });
});

$(document).ready(function(){
    $('.image-carousel').slick({
        infinite: true,      
        slidesToShow: 1,     
        slidesToScroll: 1,   
        autoplay: true,      
        autoplaySpeed: 2000, 
        arrows: false,       
        dots: false,         
        fade: true,          
        cssEase: 'linear',   
        centerMode: true,    
        focusOnSelect: false, 
        pauseOnHover: false, 
        pauseOnFocus: false,
        draggable: false,       // Disable mouse drag
        swipe: false,           // Disable touch swipe
        touchMove: false        // Prevent touch-based movement
    });
});


$(document).ready(function(){
    $('.image-slider').on('init', function(event, slick){
        console.log("Slick initialized");
    }).slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,        // ✅ Keeps it looping
        pauseOnHover: false,   // ✅ Prevents stopping on hover
        pauseOnFocus: false,   // ✅ Prevents stopping on click/focus
        pauseOnDotsHover: false, // ✅ If you add dots, it prevents stopping
        dots: false,
        arrows: false,
        fade: true,
        speed: 800,
        cssEase: 'linear',
        draggable: false,       // Disable mouse drag
        swipe: false,           // Disable touch swipe
        touchMove: false        // Prevent touch-based movement
    });
});


$(document).ready(function(){
    $('.image-slider-home').on('init', function(event, slick){
        console.log("Slick initialized");
    }).slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,        
        pauseOnHover: false,   
        pauseOnFocus: false,   
        pauseOnDotsHover: false,
        dots: true,            // Enable dots
        arrows: true,          // Enable arrows
        fade: true,
        speed: 800,
        cssEase: 'linear',
        draggable: false,
        swipe: false,
        touchMove: false,
    });
});

$(document).ready(function(){
    $('.custom-carousel').slick({
        slidesToShow: 3,              // Show 3 cards at once
        slidesToScroll: 1,            // Scroll 1 card at a time
        dots: true,                   // Enable dots for navigation
        arrows: true,                 // Enable arrows for navigation
        infinite: true,               // Enable infinite loop
        autoplay: true,              // Disable autoplay
        utoplaySpeed: 800,
        prevArrow: '.custom-prev',    // Custom prev button
        nextArrow: '.custom-next',    // Custom next button
        pauseOnHover: false,          // Don't pause when hovering
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2  // Show 2 cards on large screens
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1  // Show 1 card on smaller screens
                }
            }
        ]
    });
});