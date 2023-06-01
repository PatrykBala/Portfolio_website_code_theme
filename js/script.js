$( document ).ready(function() {
  $('.trigger').click(function() {
     $('.modal_wrapper').toggleClass('open');
    $('.page_wrapper').toggleClass('blur');
     return false;
  });
});

