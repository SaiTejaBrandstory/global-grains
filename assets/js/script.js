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
        infinite: true,      // Infinite loop
        slidesToShow: 1,     // Show 1 image at a time
        slidesToScroll: 1,   // Scroll 1 image at a time
        autoplay: true,      // Auto-scrolling enabled
        autoplaySpeed: 2000, // 2-second interval
        arrows: false,       // Hide arrows
        dots: false,         // Hide dots
        fade: true,          // Use fade effect
        cssEase: 'linear',   // Smooth transition
        centerMode: true,    // Center the active image
        focusOnSelect: false, // Ensure the active image stays centered
        pauseOnHover: false, // Prevent pausing on hover
        pauseOnFocus: false  // Prevent pausing when focused
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
        cssEase: 'linear'
    });
});
