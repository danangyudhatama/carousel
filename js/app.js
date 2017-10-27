//bikin 15 text bahasa daerah dalam bahasa pemrograman dimasukan ke dalam array
var arrayFullText = []; //tempat buat naruh full text
var arraybahasaPemrograman =   ["C++",
                                "C#",
                                "Delphi",
                                "HTML",
                                "JavaScript",
                                "JQuery",
                                "Objective-C",
                                "Pascal",
                                "Perl 5",
                                "PHP",
                                "Phyton",
                                "R",
                                "Ruby",
                                "Swift",
                                "VB .Net"];

// bikin 15 full-text pake loop
let len = arraybahasaPemrograman.length;
for (var i = 0; i < len; i++) {
    let text = bahasaPemrograman(arrayBahasaDaerah[i].text,arraybahasaPemrograman[i]);
    arrayFullText.push(text) //masukin satu persatu text ke dalam array
}

// menyisipkan full text pada HTML
for (var i = 0; i < arrayFullText.length; i++) {
    $("#slides ul").append(`<li class="slide">
        <p class="full-text">${arrayFullText[i]}</p>
    </li>`);
}



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