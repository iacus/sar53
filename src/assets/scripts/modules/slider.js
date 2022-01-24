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
      spaceBetween: 300,
			slidesPerView: 1.5,
      loop: true,
      breakpoints: {
        768: {
        //   slidesPerView: 1.5,
        //   spaceBetween: 20
        },
        992: {
        //   slidesPerView: 1.5,
        //   spaceBetween: 15
        },
        1200: {
        //   slidesPerView: 2.5,
        //   spaceBetween: 15
        },
        2000: {
        //   slidesPerView: 3.5,
        //   spaceBetween: 15
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
