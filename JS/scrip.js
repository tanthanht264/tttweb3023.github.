const menu = document.querySelector(".header-top>i")
const btnclose = document.querySelector(".header-top ul i")
console.log(menu)
menu.addEventListener("click", function() {
    document.querySelector(".header-top ul").style.transform = "translateX(0%)"
    document.querySelector(".header-top ul").style.opacity = "1"
})
btnclose.addEventListener("click", function() {
        document.querySelector(".header-top ul").style.transform = "translateX(100%)"
        document.querySelector(".header-top ul").style.opacity = "0"
    })
    // ============================Slideshow=====================================
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});