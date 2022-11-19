$(function (){
    $(window).scroll(function(){
        let scrolling=$(this).scrollTop()
        if(scrolling>20){
          $('.topTobuttom i').fadeIn(500)
      
        }else{
          $('.topTobuttom i').fadeOut(500)
        } 
        if(scrolling>50){
          $("#navber").addClass('navbg')
        }else{
          $("#navber").removeClass('navbg')
        } 
      })
      
      // home slick start
    $('.home_about_slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
      });

//  benefits start 
$('.counterr').counterUp({
  delay: 10,
  time: 1000,
});
// about team slick
$('.about_team_slick').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
// pricing  counter
$('.counter').counterUp({
  delay: 10,
  time: 1000,
});

})



