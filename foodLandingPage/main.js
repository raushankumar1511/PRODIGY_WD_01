const menuBtn= document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class" , isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class" , "ri-menu-line");
});

const scrollRevealOption = {
    distance : "50px",
    origin : "bottom",
    duration: 1000,
};

scrollReveal().reveal(".header__image img",{
    ...scrollRevealOption,
    origin:"right",
});
scrollReveal().reveal(".header__content h1",{
    ...scrollRevealOption,
    delay : 500,
});
scrollReveal().reveal(".header__content .section__description",{
    ...scrollRevealOption,
    delay: 1000,
});
scrollReveal().reveal(".header__content .header_btn",{
    ...scrollRevealOption,
    delay: 1500,
});

const swiper = new Swiper(".swiper",{
    loop:true,

    pagination:{
        el: ".swiper-pagination",
    },
});