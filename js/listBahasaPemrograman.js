
// 15 List yang tersedia untuk menampilkan text pada bahasa pemrograman tertentu 
// parameter sisipanString akan menyisipkan kata atau kalimat
// pada salah satu bahasa pemrograman (parameter namaBahasa) 
var bahasaPemrograman = function(sisipanString, namaBahasa) {
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