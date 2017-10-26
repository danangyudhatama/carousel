//$(document).ready(function () {
class BahasaDaerah {
    constructor(text, asalDaerah) {
        this.text = text;
        this.asalDaerah = asalDaerah;
    }
}


var arrayBahasaDaerah = [];
arrayBahasaDaerah.push(new BahasaDaerah("Koding téh hadé tapi tong ka leuleuwihan","Sunda"));
arrayBahasaDaerah.push(new BahasaDaerah("Koding iku apik, mek ojok keakehan","Pare, Jawa Timur"));
arrayBahasaDaerah.push(new BahasaDaerah("Baji'ji ri kana anjo koding tp tea tongko ta'liwa' liwa'","Makassar"));
arrayBahasaDaerah.push(new BahasaDaerah("Koding itu rancak, tapi jan balabiah an","Padang"));
arrayBahasaDaerah.push(new BahasaDaerah("Makanja tu coding e tapi maja ko malebbi ki","Bugis"));
arrayBahasaDaerah.push(new BahasaDaerah("Koding ikei yo apik, taping yo ojo kario keseron seron wyak!!","Banyuwangi"));
arrayBahasaDaerah.push(new BahasaDaerah("Ngoding kue apik, tapi ya aja kakehan","Ngapak"));
arrayBahasaDaerah.push(new BahasaDaerah("Koding kuh bagus, tapi aja keluwien","Indramayu"));
arrayBahasaDaerah.push(new BahasaDaerah("koding jrowa bhâghus tapèh ajjhâ' lebbi","Madura"));
arrayBahasaDaerah.push(new BahasaDaerah("Koding sino bagus, laguk dendek kedemenan","Lombok"));
arrayBahasaDaerah.push(new BahasaDaerah("Jeges do kodingi... Tai ulang na bahay tu","Mandailing"));
arrayBahasaDaerah.push(new BahasaDaerah("Koding iro bueq tapi boteq meliwat","Dayak Benuaq"));
arrayBahasaDaerah.push(new BahasaDaerah("Koding tuh baek, tapi jangan lebay","gaul Jakarta"));
arrayBahasaDaerah.push(new BahasaDaerah("Koding luwung nanging de bes-bes","Bali"));
arrayBahasaDaerah.push(new BahasaDaerah("Koding itu bagus, tapi jangan berlebihan","Bahasa Indonesia"));    

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

    // bikin pake loop
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



// 15 List yang tersedia untuk menampilkan text pada bahasa pemrograman tertentu 
// parameter sisipanString akan menyisipkan kata atau kalimat
// pada salah satu bahasa pemrograman (parameter namaBahasa) 
function bahasaPemrograman(sisipanString, namaBahasa) {
        let string = sisipanString;
        switch (namaBahasa) {
            case "C++":
                return `std::cout << "${string}";`;
                break;
            case "C#":
                return `Console.WriteLine("${string}");`;
                break;
            case "Delphi":
                return `Writeln('${string}');`;
                break;
            case "HTML":
                return `<h1>${string}</h1>`;
                break;
            case "JavaScript":
                return `document.write('${string}');`;
                break;
            case "JQuery":
                return `$("body").append("${string}");`;
                break;
            case "Objective-C":
                return `NSLog(@"${string}");`;
                break;
            case "Pascal":
                return `WriteLn('${string}');`;
                break;
            case "Perl 5":
                return `print "${string}";`;
                break;
            case "PHP":
                return `<?php echo '<p>${string}</p>'; ?>`;
                break;
            case "Phyton":
                return `print "${string}"`;
                break;
            case "R":
                return `cat('${string}')`;
                break;
            case "Ruby":
                return `puts "${string}"`;
                break;
            case "Swift":
                return `println("${string}")`;
                break;
            case "VB .Net":
                return `Console.WriteLine("${string}")`;
                break;

        };
    
}