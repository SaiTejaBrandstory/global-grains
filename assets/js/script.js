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
