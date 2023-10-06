$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    // slide-up-script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });




    // toggle menu script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});


// typing animation script
var typed = new Typed(".typing", {
    strings: ["Full Stack Devloper", "UI Devloper", "UX Devloper"],
    typeSpeed: 100,
    backspeed: 60,
    loop: true
})
var typed = new Typed(".typing-2", {
    strings: ["Full Stack Devloper", "UI Devloper", "UX Devloper"],
    typeSpeed: 100,
    backspeed: 60,
    loop: true
})

// =======================================
// hexagon styling
var carousel = document.querySelector('.carousel');
var cellCount = 9;
var selectedIndex = 0;

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});
// ====================================

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}









