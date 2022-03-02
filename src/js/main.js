'uses strict';
const saleSlider = new Swiper('.slider-sale', {
    navigation: {
        nextEl: '.slider-sale--next',
        prevEl: '.slider-sale--prev',
        disabledClass: 'slider__btn--disabled',
    },
    slidesPerView: 1,
    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       slidesPerView: 2,
    //       spaceBetween: 60
    //     },
    //     // when window width is >= 480px
    //     768: {
    //       spaceBetween: 76
    //     },
    //     // when window width is >= 640px
    //     1024: {
    //       slidesPerView: 6,
    //     }
    //   }
});
const howSlider = new Swiper('.slider-how', {
    navigation: {
        nextEl: '.slider-how--next',
        prevEl: '.slider-how--prev',
        disabledClass: 'slider__btn--disabled',
    },
    slidesPerView: 1,
    pagination: {
        el: '.slider-how--pag',
        type: 'bullets',
        bulletClass: 'slider__pag-element',
        bulletElement: 'button',
        bulletActiveClass: 'slider__pag-element--active'
    },
    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       slidesPerView: 2,
    //       spaceBetween: 60
    //     },
    //     // when window width is >= 480px
    //     768: {
    //       spaceBetween: 76
    //     },
    //     // when window width is >= 640px
    //     1024: {
    //       slidesPerView: 6,
    //     }
    //   }
});
const sourceSlider = new Swiper('.slider-source', {
    navigation: {
        nextEl: '.slider-source--next',
        prevEl: '.slider-source--prev',
        disabledClass: 'slider__btn--disabled',
    },
    slidesPerView: 1,
    pagination: {
        el: '.slider-source--pag',
        type: 'bullets',
        bulletClass: 'slider__pag-element slider__pag-element--grey',
        bulletElement: 'button',
        bulletActiveClass: 'slider__pag-element--active'
    },
    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       slidesPerView: 2,
    //       spaceBetween: 60
    //     },
    //     // when window width is >= 480px
    //     768: {
    //       spaceBetween: 76
    //     },
    //     // when window width is >= 640px
    //     1024: {
    //       slidesPerView: 6,
    //     }
    //   }
});
const videoSlider = new Swiper('.slider-videos', {
    navigation: {
        nextEl: '.slider-videos--next',
        prevEl: '.slider-videos--prev',
        disabledClass: 'slider__btn--disabled',
    },
    
    // pagination: {
    //     el: '.slider-videos--pag',
    //     type: 'bullets',
    //     bulletClass: 'slider__pag-element',
    //     bulletElement: 'button',
    //     bulletActiveClass: 'slider__pag-element--active'
    // },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
      }
});
const gallerySlider = new Swiper('.slider-gallery', {
    navigation: {
        nextEl: '.slider-gallery--next',
        prevEl: '.slider-gallery--prev',
        disabledClass: 'slider__btn--disabled',
    },
    pagination: {
        el: '.slider-gallery--pag',
        type: 'bullets',
        bulletClass: 'slider__pag-element',
        bulletElement: 'button',
        bulletActiveClass: 'slider__pag-element--active'
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
      }
    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       slidesPerView: 2,
    //       spaceBetween: 60
    //     },
    //     // when window width is >= 480px
    //     768: {
    //       spaceBetween: 76
    //     },
    //     // when window width is >= 640px
    //     1024: {
    //       slidesPerView: 6,
    //     }
    //   }
});
const servicesSlider = new Swiper('.slider-services', {
    navigation: {
        nextEl: '.slider-services--next',
        prevEl: '.slider-services--prev',
        disabledClass: 'slider__btn--disabled',
    },
    slidesPerView: 1,
    pagination: {
        el: '.slider-services--pag',
        type: 'bullets',
        bulletClass: 'slider__pag-element slider__pag-element--grey',
        bulletElement: 'button',
        bulletActiveClass: 'slider__pag-element--active'
    },
    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       slidesPerView: 2,
    //       spaceBetween: 60
    //     },
    //     // when window width is >= 480px
    //     768: {
    //       spaceBetween: 76
    //     },
    //     // when window width is >= 640px
    //     1024: {
    //       slidesPerView: 6,
    //     }
    //   }
});

let faqs = document.querySelectorAll('.faq__btn');
faqs.forEach(faq => {
    faq.addEventListener('click', function(){
        this.parentElement.parentElement.classList.toggle('faq--expand');
    })
});
let scrollBtns = document.querySelectorAll('.scroll');
scrollBtns.forEach(scrollBtn => {
    scrollBtn.addEventListener('click', function(e){
        e.preventDefault();
        console.log(this);
        scrollTo({
            top: document.querySelector(this.attributes.href.nodeValue).offsetTop,
            behavior: "smooth"
        });

    })
});
let videoBtns = document.querySelectorAll('.play-video');
videoBtns.forEach(videoBtn => {
    videoBtn.addEventListener('click', function(){
        this.classList.add('hide');
        this.nextElementSibling.classList.add('hide');
        this.previousElementSibling.src = this.dataset.video;
        // this.parentElement.parentElement.classList.toggle('faq--expand');
    })
});
let modalBtns = document.querySelectorAll('.open-modal');
let modalBgs = document.querySelectorAll('.modal__bg');
let modalSource = document.querySelector('[name="source"]');
modalBtns.forEach(modalBtn => {
    modalBtn.addEventListener('click', formToggle);
});
modalBgs.forEach(modalBg => {
    modalBg.addEventListener('click', modalClose);
});
function formToggle(){
    modalSource.value = this.dataset.source;
    document.body.classList.toggle('modal--form');
}
function modalClose(){
    document.body.classList.remove(document.body.classList);
}
let modalVideo = document.querySelector('.open-video');
modalVideo.addEventListener('click', videoToggle);
function videoToggle(){
    document.body.classList.toggle('modal--video');
}
let modalVideo2 = document.querySelector('.open-video2');
modalVideo2.addEventListener('click', videoToggle2);
function videoToggle2(){
    document.body.classList.toggle('modal--video2');
}

let expandBtns = document.querySelectorAll('.expand-rent');
expandBtns.forEach(expandBtn => {
    expandBtn.addEventListener('click', expandRent);
});
function expandRent(){
    this.classList.toggle('rent-more--expand');
    this.nextElementSibling.classList.toggle('show');
}

let openPhotos = document.querySelectorAll('.open-pic'),
bigPhoto = document.querySelector('.photo-big'),
modalPhoto = document.querySelector('.modal-photo');
openPhotos.forEach(openPhoto => {
    openPhoto.addEventListener('click', showPhoto);
});
function showPhoto(){
    document.body.classList.add('modal--photo');
    console.log(this.src);
    bigPhoto.src = this.src;
}