/* inspiration 
https://cz.pinterest.com/pin/830703093774129160/ */
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    }
  }
});


