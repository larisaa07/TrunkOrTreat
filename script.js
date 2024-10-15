$('document').ready(function(){
    $('.fadeTitle').hide()
});

$('.fadeTitleImg').on('mouseover', function() {
    $('.fadeTitleImg').fadeOut(2000);
    $('.fadeTitle').hide().delay(2000).fadeIn(2000);
    
});
