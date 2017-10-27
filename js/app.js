var arrayFullText = ["saya","berterima","kasih","kepada","sekolahkoding","atas","ilmunya"]; //tempat buat naruh full text di setiap slide

// menyisipkan slide2 yang telah dibuat dalam array diatas
for (var i = 0; i < arrayFullText.length; i++) {
    $("#slides ul").append(`<li class="slide">
        <p class="full-text">${arrayFullText[i]}</p>
    </li>`);
}



//rotation speed and timer
var speed = 1500;
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
    }, 500, function () {
    container.find('li:last').after(container.find('li:first'));
    resetSlides();
});
}