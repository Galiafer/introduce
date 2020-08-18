// !SMOOTH SLIDE
$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"},1500);
            return false;
    });
});
// !SMOOTH SLIDE

// !Menu anim
let dropmenu = document.querySelector('.dropmenu');
let openmenu = document.querySelector('.nav__openmenu');
let closemenu = document.querySelector('.nav__closemenu');
let menu = document.querySelector('.nav__menu');

let menuAnim = () => {
    openmenu.classList.toggle("nav__menu--anim");
    closemenu.classList.toggle("nav__menu--anim");
    closemenu.classList.contains("nav__menu--anim") ? menu.style.opacity = "1" : menu.style.opacity = "0";
};

dropmenu.addEventListener("click",menuAnim);
// !Menu anim

// !NAV COLOR-CHANGE
let nav = document.querySelector(".nav");
let logoSpan = document.querySelector(".nav__logo>span");

let About = () => {
    window.addEventListener("scroll",function(){
        if (window.screen.width < 470) {
            if (window.scrollY < 830) {
                nav.classList.remove("nav--blue");
                logoSpan.classList.remove("nav__color--blue");
                openmenu.classList.remove("nav__menuIcon--colorAbout");
                closemenu.classList.remove("nav__menuIcon--colorAbout");
                menu.classList.remove("nav__bgcolor--blue");
            } else if (window.scrollY > 830) {
                nav.classList.add("nav--blue");
                logoSpan.classList.add("nav__color--blue");
                openmenu.classList.add("nav__menuIcon--colorAbout");
                closemenu.classList.add("nav__menuIcon--colorAbout");
                menu.classList.add("nav__bgcolor--blue");
            } else {
                return false;
            }
        } else {
            if (window.scrollY < 880) {
                nav.classList.remove("nav--blue");
                logoSpan.classList.remove("nav__color--blue");
                openmenu.classList.remove("nav__menuIcon--colorAbout");
                closemenu.classList.remove("nav__menuIcon--colorAbout");
                menu.classList.remove("nav__bgcolor--blue");
            } else if (window.scrollY > 880) {
                nav.classList.add("nav--blue");
                logoSpan.classList.add("nav__color--blue");
                openmenu.classList.add("nav__menuIcon--colorAbout");
                closemenu.classList.add("nav__menuIcon--colorAbout");
                menu.classList.add("nav__bgcolor--blue");
            } else {
                return false;
            }
        }
    });
};
let Services = () => {
    window.addEventListener("scroll",function(){
        if (window.screen.width < 470) {
            if (window.scrollY < 1750) {
                nav.classList.remove("nav--green");
                logoSpan.classList.remove("nav__color--green");
                openmenu.classList.remove("nav__menuIcon--colorServices");
                closemenu.classList.remove("nav__menuIcon--colorServices");
                menu.classList.remove("nav__bgcolor--green");
            } else if (window.scrollY > 1750) {
                nav.classList.add("nav--green");
                logoSpan.classList.add("nav__color--green");
                openmenu.classList.add("nav__menuIcon--colorServices");
                closemenu.classList.add("nav__menuIcon--colorServices");
                menu.classList.add("nav__bgcolor--green");
            } else {
                return false;
            }
        } else {
            if (window.scrollY < 1900) {
                nav.classList.remove("nav--green");
                logoSpan.classList.remove("nav__color--green");
                openmenu.classList.remove("nav__menuIcon--colorServices");
                closemenu.classList.remove("nav__menuIcon--colorServices");
                menu.classList.remove("nav__bgcolor--green");
            } else if (window.scrollY > 1900) {
                nav.classList.add("nav--green");
                logoSpan.classList.add("nav__color--green");
                openmenu.classList.add("nav__menuIcon--colorServices");
                closemenu.classList.add("nav__menuIcon--colorServices");
                menu.classList.add("nav__bgcolor--green");
            } else {
                return false;
            }
        }
    });
};
let Portfolio = () => {
    window.addEventListener("scroll",function(){
        if (window.screen.width < 470) {
            if (window.scrollY < 2980) {
                nav.classList.remove("nav--brown");
                logoSpan.classList.remove("nav__color--brown");
                openmenu.classList.remove("nav__menuIcon--colorPortfolio");
                closemenu.classList.remove("nav__menuIcon--colorPortfolio");
                menu.classList.remove("nav__bgcolor--brown");
            } else if (window.scrollY > 2980) {
                nav.classList.add("nav--brown");
                logoSpan.classList.add("nav__color--brown");
                openmenu.classList.add("nav__menuIcon--colorPortfolio");
                closemenu.classList.add("nav__menuIcon--colorPortfolio");
                menu.classList.add("nav__bgcolor--brown");
            } else {
                return false;
            }
        } else {
            if (window.scrollY < 3030) {
                nav.classList.remove("nav--brown");
                logoSpan.classList.remove("nav__color--brown");
                openmenu.classList.remove("nav__menuIcon--colorPortfolio");
                closemenu.classList.remove("nav__menuIcon--colorPortfolio");
                menu.classList.remove("nav__bgcolor--brown");
            } else if (window.scrollY > 1900) {
                nav.classList.add("nav--brown");
                logoSpan.classList.add("nav__color--brown");
                openmenu.classList.add("nav__menuIcon--colorPortfolio");
                closemenu.classList.add("nav__menuIcon--colorPortfolio");
                menu.classList.add("nav__bgcolor--brown");
            } else {
                return false;
            }
        };
        if (window.screen.width < 375) {
            if (window.scrollY < 2100) {
                nav.classList.remove("nav--brown");
                logoSpan.classList.remove("nav__color--brown");
                openmenu.classList.remove("nav__menuIcon--colorPortfolio");
                closemenu.classList.remove("nav__menuIcon--colorPortfolio");
                menu.classList.remove("nav__bgcolor--brown");
            } else if (window.scrollY > 2100) {
                nav.classList.add("nav--brown");
                logoSpan.classList.add("nav__color--brown");
                openmenu.classList.add("nav__menuIcon--colorPortfolio");
                closemenu.classList.add("nav__menuIcon--colorPortfolio");
                menu.classList.add("nav__bgcolor--brown");
            } else {
                return false;
            }
        } else {
            if (window.scrollY < 2100) {
                nav.classList.remove("nav--brown");
                logoSpan.classList.remove("nav__color--brown");
                openmenu.classList.remove("nav__menuIcon--colorPortfolio");
                closemenu.classList.remove("nav__menuIcon--colorPortfolio");
                menu.classList.remove("nav__bgcolor--brown");
            } else if (window.scrollY > 2100) {
                nav.classList.add("nav--brown");
                logoSpan.classList.add("nav__color--brown");
                openmenu.classList.add("nav__menuIcon--colorPortfolio");
                closemenu.classList.add("nav__menuIcon--colorPortfolio");
                menu.classList.add("nav__bgcolor--brown");
            } else {
                return false;
            }
        };
    });   
};
let Contact = () => {
    window.addEventListener("scroll",function(){
        if (window.screen.width < 470) {
            if (window.scrollY < 4400) {
                nav.classList.remove("nav--grey");
                logoSpan.classList.remove("nav__color--grey");
                openmenu.classList.remove("nav__menuIcon--colorContact");
                closemenu.classList.remove("nav__menuIcon--colorContact");
                menu.classList.remove("nav__bgcolor--grey");
            } else if (window.scrollY > 4400) {
                nav.classList.add("nav--grey");
                logoSpan.classList.add("nav__color--grey");
                openmenu.classList.add("nav__menuIcon--colorContact");
                closemenu.classList.add("nav__menuIcon--colorContact");
                menu.classList.add("nav__bgcolor--grey");
            } else {
                return false;
            }
        } else if ( window.screen.width < 380 ) {
            if (window.scrollY < 3000) {
                nav.classList.remove("nav--grey");
                logoSpan.classList.remove("nav__color--grey");
                openmenu.classList.remove("nav__menuIcon--colorContact");
                closemenu.classList.remove("nav__menuIcon--colorContact");
                menu.classList.remove("nav__bgcolor--grey");
            } else if (window.scrollY > 3000) {
                nav.classList.add("nav--grey");
                logoSpan.classList.add("nav__color--grey");
                openmenu.classList.add("nav__menuIcon--colorContact");
                closemenu.classList.add("nav__menuIcon--colorContact");
                menu.classList.add("nav__bgcolor--grey");
            } else {
                return false;
            }
        } else {
            return false
        };
    });  
};

// *Func START
About();
Services();
Portfolio();
Contact();

// !NAV COLOR-CHANGE

function getCoords() {
    let box = document.querySelector(".contact").getBoundingClientRect();
  
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

console.log(getCoords());


// !SLIDER
$('.slider__collage-1').slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'ease-in-out',
    speed: 1000,
      responsive: [
    {
      breakpoint: 1550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});
$('.slider__collage-2').slick({
  infinite: true,
  arrows: false,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: 'ease-in-out',
  speed: 1000,
    responsive: [
    {
      breakpoint: 1550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});

