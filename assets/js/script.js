const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const cta = document.querySelector('.cta');
const numwrapper = document.querySelector('.num-wrapper');

var tl = gsap.timeline();

tl.fromTo(
        hero, 
            1, 
            {height: "0%"}, 
            {height: "100%", ease: Power3.easeInOut}
    ).fromTo(
        hero, 1.2, 
            {width: "100%"}, 
            {width: "80%", ease: Power3.easeInOut}
    )
    .fromTo(
        slider, 
            1.2, 
            { x: "-100%"}, 
            {x: "-24%", ease: Power3.easeInOut}, 
            "-=1.2"
    )
    .fromTo(
        logo, 
            0.5, 
            {opacity: 0, y: -100},
            {opacity: 1, y: 0},
            "-=0.5"
            )
    .fromTo(
        hamburger, 
            0.5, 
            {opacity: 0, y: -100},
            {opacity: 1, y: 0},
            "-=0.5"
            )
    .fromTo(
        cta, 
            0.5, 
            {opacity: 0, y: -100},
            {opacity: 1, y: 0},
            "-=0.5"
            )
    .fromTo(
        numwrapper, 
            0.5, 
            {opacity: 0, y: -100},
            {opacity: 1, y: 0},
            "-=0.5"
            )
    .fromTo(
        headline, 
            0.5, 
            {opacity: 0, y: -100},
            {opacity: 1, y: 0}, 
            "-=0.5"
            );



//tl.fromTo(headline, 1.4, {left: "-100%"}, {left: "0%", ease: Power3.easeOut}); 


