'use strict'

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
// import 'swiper/css'

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

export default class Slider {
  constructor () {
    this.config = {

    }

  }

  slider () {
    var mySwiper = new Swiper('.swiper-container', {
      grabCursor: true,
      spaceBetween: 40,
			slidesPerView: 1.2,
      breakpoints: {
        768: {
          spaceBetween: 100,
          slidesPerView: 1.2,
        },
        992: {
          spaceBetween: 120,
          slidesPerView: 1.2,
        },
        1200: {
          spaceBetween: 150,
          slidesPerView: 1.2,
        },
        2000: {
          spaceBetween: 200,
    			slidesPerView: 1.2,
        }
      }
    })
  }

  init () {
    this.slider()

    // document.addEventListener('swup:contentReplaced', (event) => {
    //   this.slider()
    // });
  }
}
