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
document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                let count = 0;

                const updateCounter = () => {

                    const increment = Math.ceil(target / 100);

                    if (count < target) {

                        count += increment;

                        if (count > target) count = target;

                        counter.textContent = count;

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.textContent = target;

                    }
                };

                updateCounter();

                // Isang beses lang mag-run
                observer.unobserve(counter);
            }

        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));

});
const swiper = new Swiper(".videoSwiper",{

    loop:true,

    speed:700,

    autoplay:{
        delay:5000,
        disableOnInteraction:false
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },

    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },

});
const videoSwiper = new Swiper(".videoSwiper", {

    loop: true,

    allowTouchMove: false, // <-- idagdag ito

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }

});
