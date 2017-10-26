//$(document).ready(function () {
    //rotation speed and timer
    var speed = 3500;
    var slides = $('.slide');
    var container = $('#slides ul');
    var item_width = container.width();
    slides.width(item_width); //set the slides to the correct pixel width
    container.parent().width(item_width);
    container.width(slides.length * item_width); //set the slides container to the correct total width
    setInterval(rotate, speed);
    
    function resetSlides() {
        //and adjust the container so current is in the frame
        container.css({
            'left': 0
        });
    }

    function rotate() {
    container.stop().animate({
        'left': item_width * -1
        }, 1500, function () {
        container.find('li:last').after(container.find('li:first'));
        resetSlides();
    });
    }
    
//});

