const swiper = new Swiper('.swiper-hero ', {
// Optional parameters
direction: 'horizontal',
loop: true,

//las imagenes pasan solas
autoplay:  {
    delay: 3000, 
        //se pausa el slide cuando le pasa el mouse por encima
    pauseOnMouseEnter: true, 

    //para q vuelva a reproducirse sola luego de interactuar con el slide
    disableOnInteraction: false,

  }, 

// If we need pagination
pagination: {
el: '.swiper-pagination',
//te permita ir direco al slide q uno clickee 
clickable: true,
//para q se ponga mas grand la bolita q le pertenece el slide q se muestra
dynamicBullets: true,
//indicar la cantidad d bullet dinamicas
dynamicMainBullets: 3,
},

// Navigation arrows
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

// And if we need scrollbar
//hay un chorro d estilos pa el scrollbar
/* scrollbar: {
el: '.swiper-scrollbar',
},*/
}); 



const swiper2 = new Swiper('.swiper-products', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

/*   slidesPerView: 3,
  slidesPerGroup: 3, 
  spaceBetween:30,*/
  grabCursor:true,
  breakpoints:{
    640: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 40,
      mousewheel: true, 
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 130,
    },
  },

  //las imagenes pasan solas
  autoplay: false,  
  // If we need pagination
  pagination: {
  el: '.swiper-pagination',
  //te permita ir direco al slide q uno clickee 
  clickable: true,
  //para q se ponga mas grand la bolita q le pertenece el slide q se muestra
  dynamicBullets: true,
  //indicar la cantidad d bullet dinamicas
  dynamicMainBullets: 3,
  },
  
  // Navigation arrows
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
  
  // And if we need scrollbar
  //hay un chorro d estilos pa el scrollbar
  /* scrollbar: {
  el: '.swiper-scrollbar',
  },*/
  }); 