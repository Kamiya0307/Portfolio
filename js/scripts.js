$(document).ready(function(){
$(window).scroll(function(){
  if(this.scrollY > 10){
    $(".navbar").addClass("sticky");
    $(".TOP").fadeIn();
  }
  else{
    $(".navbar").removeClass("sticky");
    $(".TOP").fadeOut();
  }
});

$('.toggle-menu').click(function(){
  $(this).toggleClass("active");
  $(".navbar-menu").toggleClass("active");
});

$(".TOP").click(function(){scroll(0,0)});

// $(".works").magnificPopup({
//   delegate: 'a',
//   type: 'image',
//   gallery:{enabled:true}
// });
});

