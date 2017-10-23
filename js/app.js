$(document).ready(function () {
    //rotation speed and timer
    var speed = 1500;
    
    var run = setInterval(rotate, speed);
    var slides = $('.slide');
    var container = $('#slides ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = container.width();
    slides.width(item_width); //set the slides to the correct pixel width
    container.parent().width(item_width);
    container.width(slides.length * item_width); //set the slides container to the correct total width
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides();
    
    function resetSlides() {
        //and adjust the container so current is in the frame
        container.css({
            'left': -1 * item_width
        });
    }

    function rotate() {
    container.stop().animate({
        'left': item_width * -2
        }, 250, function () {
        container.find(elm + ':last').after(container.find(elm + ':first'));
        resetSlides();
    });
    }
    
});
