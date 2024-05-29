// Initialize products swiper
const productSwiper = new Swiper(".products-swiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    mousewheel: true,
    keyboard: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 25
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 25
        }
    }
});
// Initialize recipients swiper
const recipientSwiper = new Swiper(".recipients-swiper", {
    slidesPerView: 2,
    spaceBetween: 15,
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        480: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 15
        }
    }
});