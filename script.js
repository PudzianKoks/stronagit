const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        desableOnInteraction: false,
    },
loop: true,

pagination: {
    el: '.swiper-pagination',
    clickable: true,
},

navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
});

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
})

const hiddenElements = document.querySelectorAll('.hidden'); 
hiddenElements.forEach((el) => observer.observe(el));


const FOTOS = document.querySelectorAll(".foto img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close")
const POPUP_IMG = document.querySelector(".popup__img");

FOTOS.forEach((foto) => {
    foto.addEventListener("click", (e) =>{
        POPUP.classList.remove("hidden");
        POPUP_IMG.src = e.target.src;
    });
});

POPUP_CLOSE.addEventListener("click", () => {
    POPUP.classList.add("hidden");
})