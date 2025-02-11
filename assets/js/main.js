/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

// /*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// /*=============== SHOW DROPDOWN ===============*/
document.addEventListener("DOMContentLoaded", function () {
   const nav_scroll = document.querySelector(".nav");

   window.addEventListener("scroll", function () {
       if (window.scrollY > 50) {
           nav_scroll.classList.add("shrink");
       } else {
           nav_scroll.classList.remove("shrink");
       }
   });
});

document.addEventListener("DOMContentLoaded", function () {
   const header = document.querySelector(".header");

   window.addEventListener("scroll", function () {
       if (window.scrollY > 50) {
           header.classList.add("shrink");
       } else {
           header.classList.remove("shrink");
       }
   });
});






    // document.querySelectorAll('.js-scroll-trigger').forEach(anchor => {
    //     anchor.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    //     });
    // });




