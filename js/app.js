let arrayFullText = []; //tempat buat naruh full text di setiap slide
let longTextLanguage =      ["C++",
                            "C#",
                            "Delphi",
                            "Objective-C",
                            "Pascal",
                            "Java",
                            "Scala",
                            "Go",
                            "PL/SQL",
                            "Algol-60",
                            "Fortran",
                            "Cobra"];

let shortTextLanguage =     ["HTML",
                            "Javascript",
                            "JQuery",
                            "Perl 5",
                            "PHP",
                            "Phyton",
                            "Ruby",
                            "Swift",
                            "MATLAB",
                            "Julia",
                            "R",
                            "Basic",
                            "DOS",
                            "Haskell"];

// bikin pake loop
let len1 = longTextLanguage.length;
for (var i = 0; i < len1; i++) {
	let editedTextBhs = `<span class="text-bahasa">${arrayBahasaDaerah[i].text}</span>`; //nambahin Tag Span ke text bahasa
    let text = bahasaPemrograman(editedTextBhs,longTextLanguage[i]);
    arrayFullText.push(text) //masukin satu persatu text ke dalam array
        $("#slides ul").append(`<li class="slide">
                <div class="full-text">${arrayFullText[i]}</div>
                <div class="bahasaContainer">
                                <div class="bahasa-daerah">${arrayBahasaDaerah[i].asalDaerah}</div>
                                <div class="bahasa-pemrograman">${longTextLanguage[i]}</div>
                </div>
            </li>`);
    }
arrayFullText = []; // kosongin array
let len2 = shortTextLanguage.length;
for (var i = 0; i < len2; i++) {
	let editedTextBhs = `<span class="text-bahasa">${arrayBahasaDaerah[i+len1].text}</span>`; //nambahin Tag Span ke text bahasa
    let text = bahasaPemrograman(editedTextBhs,shortTextLanguage[i]);
    arrayFullText.push(text) //masukin satu persatu text ke dalam array
        $("#slides ul").append(`<li class="slide">
                <div class="full-text short">${arrayFullText[i]}</div>
                <div class="bahasaContainer">
                                <div class="bahasa-daerah">${arrayBahasaDaerah[i+len1].asalDaerah}</div>
                                <div class="bahasa-pemrograman">${shortTextLanguage[i]}</div>
                </div>
            </li>`);
    }

//rotation speed and timer
var speed = 3500; // berapa lama slide akan ditampilkan dalam milisekon
var slides = $('.slide');
var container = $('#slides ul'); 
var item_width = container.width();
slides.width(item_width); // menentukan lebar kontainer agar mulus animasinya
container.parent().width(item_width);
container.width(slides.length * item_width); // menentukan lebar slide kontainer agar semua slidenya bisa masuk
setInterval(rotate, speed); // setiap 1,5 detik maka slide akan digeser

function resetSlides() {
    //reset posisi left property container ke nol lagi
    container.css({
        'left': 0
    });
}

function rotate() {
container.stop().animate({
    'left': item_width * -1 // geser kontainer ke kiri sebesar lebar slide
    }, 500, function () {  // waktu animasi 500 ms
    container.find('li:last').after(container.find('li:first')); //pindahkan slide pertama ("li:first") setelah slide terakhir("li:last")
    resetSlides(); //reset posisi container
});
}