const videoSwiper = new Swiper(".videoSwiper", {

    slidesPerView:1,

    spaceBetween:20,

    loop:true,

    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },

    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    }

});