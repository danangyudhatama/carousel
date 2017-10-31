// 15 List yang tersedia untuk menampilkan text pada bahasa pemrograman tertentu 
// parameter sisipanString akan menyisipkan kata atau kalimat
// pada salah satu bahasa pemrograman (parameter namaBahasa) 
var bahasaPemrograman = function(sisipanString, namaBahasa) {
		let string = sisipanString;
		switch (namaBahasa) {
			case "C++":
				return `#include <br>
						int main() { <br>
						&emsp;    std::cout << "<span class="text-bahasa">${string}</span>"; <br>
						&emsp;    return 0; <br>
						}`;
				break;
			case "C#":
				return `using System; <br>
						class Program { <br>
						&emsp;	public static void Main(string[ ] args) { <br>
						&emsp;	Console.WriteLine("<span class="text-bahasa">${string}</span>"); <br>
						&emsp;	} <br>
						}`;
				break;
			case "Delphi":
				return `program bahasaDaerah; <br>
						begin <br>
						&emsp;	Writeln('<span class="text-bahasa">${string}</span>'); <br>
						end.`;
				break;
			case "HTML":
				return `&lt;h1&gt;<span class="text-bahasa">${string}</span>&lt;/h1&gt;`;
				break;
			case "Javascript":
				return `document.write('<span class="text-bahasa">${string}</span>');`;
				break;
			case "JQuery":
				return `$("body").append("<span class="text-bahasa">${string}</span>");`;
				break;
			case "Objective-C":
				return `#import <br>
						#import <br>
						int main(void) { <br>
						&emsp;	NSLog(@"<span class="text-bahasa">${string}</span>"); <br>
						&emsp;	return 0; <br>
						}`;
				break;
			case "Pascal":
				return `program bahasaDaerah; <br>
						begin <br>
						&emsp;	writeln('<span class="text-bahasa">${string}</span>'); <br>
						end.`;
				break;
			case "Perl 5":
				return `print "<span class="text-bahasa">${string}</span>";`;
				break;
			case "PHP":
				return `&lt;?php echo '<span class="text-bahasa">${string}</span>'; ?&gt;`;
				break;
			case "Phyton":
				return `print "<span class="text-bahasa">${string}</span>"`;
				break;
			case "Java":
				return `public class bahasaDaerah { <br>
					    &emsp;	public static void main(String[] args) { <br>
					    &emsp; 	System.out.println("<span class="text-bahasa">${string}</span>"); <br>
					    &emsp;	} <br>
						}`;
				break;
			case "Ruby":
				return `puts "<span class="text-bahasa">${string}</span>"`;
				break;
			case "Swift":
				return `println("<span class="text-bahasa">${string}</span>")`;
				break;
			case "VB .Net":
				return `Module Module1 <br>
						&emsp;	Sub Main() <br>
						&emsp;  &emsp;	Console.WriteLine("<span class="text-bahasa">${string}</span>") <br>
						&emsp;	End Sub <br>
						End Module`;
				break;

		};
	
}