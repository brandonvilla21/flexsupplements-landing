$( document ).ready(function(){
    var animatedOffset = 90;
    // hide our element on page load
    $('.feature-supplement').css('opacity', 0);
    $('.feature-one-text').css('opacity', 0);
    $('.feature-two-heading').css('opacity', 0);
    $('.feature-two-form').css('opacity', 0);
    $('.feature-footer').css('opacity', 0);
    $('.feature-carousel-b').css('opacity', 0);
    $('.feature-carousel-a').css('opacity', 0);
    
    $('.feature-supplement').waypoint( function() {
        $('.feature-supplement').addClass('fadeInUp');
    }, { offset: animatedOffset + '%' });
    
    $('.feature-one-text').waypoint( function() {
        $('.feature-one-text').addClass('fadeInRight');
    }, { offset: animatedOffset + '%' });
    
    $('.feature-two-heading').waypoint( function() {
        $('.feature-two-heading').addClass('fadeInLeft');
    }, { offset: animatedOffset + '%' });

    $('.feature-two-form').waypoint( function() {
        $('.feature-two-form').addClass('fadeInRight');
    }, { offset: animatedOffset + '%' });

    $('.feature-footer').waypoint( function() {
        $('.feature-footer').addClass('animated fadeInUp');
    }, { offset: animatedOffset + '%' });

    $('.feature-carousel-a').waypoint( function() {
        $('.feature-carousel-a').addClass('animated fadeInRight');
    }, { offset: animatedOffset + '%' });

    $('.feature-carousel-b').waypoint( function() {
        $('.feature-carousel-b').addClass('animated fadeInLeft');
    }, { offset: animatedOffset + '%' });
});