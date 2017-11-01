// 15 List yang tersedia untuk menampilkan text pada bahasa pemrograman tertentu 
// parameter sisipanString akan menyisipkan kata atau kalimat
// pada salah satu bahasa pemrograman (parameter namaBahasa) 
var bahasaPemrograman = function(sisipanString, namaBahasa) {
		let string = sisipanString;
		switch (namaBahasa) {
			case "C++":
				return `#include <br>
						int main() { <br>
						&emsp;    std::cout << "${string}"; <br>
						&emsp;    return 0; <br>
						}`;
				break;
			case "C#":
				return `using System; <br>
						class Program { <br>
						&emsp;	public static void Main(string[ ] args) { <br>
						&emsp;	Console.WriteLine("${string}"); <br>
						&emsp;	} <br>
						}`;
				break;
			case "Delphi":
				return `program bahasaDaerah; <br>
						begin <br>
						&emsp;	Writeln('${string}'); <br>
						end.`;
				break;
			case "HTML":
				return `&lt;h1&gt;${string}&lt;/h1&gt;`;
				break;
			case "Javascript":
				return `document.write('${string}');`;
				break;
			case "JQuery":
				return `$("body").append("${string}");`;
				break;
			case "Objective-C":
				return `#import <br>
						#import <br>
						int main(void) { <br>
						&emsp;	NSLog(@"${string}"); <br>
						&emsp;	return 0; <br>
						}`;
				break;
			case "Pascal":
				return `program bahasaDaerah; <br>
						begin <br>
						&emsp;	writeln('${string}'); <br>
						end.`;
				break;
			case "Perl 5":
				return `print "${string}";`;
				break;
			case "PHP":
				return `&lt;?php echo '${string}'; ?&gt;`;
				break;
			case "Phyton":
				return `print "${string}"`;
				break;
			case "Java":
				return `public class bahasaDaerah { <br>
					    &emsp;	public static void main(String[] args) { <br>
					    &emsp; 	System.out.println("${string}"); <br>
					    &emsp;	} <br>
						}`;
				break;
			case "Ruby":
				return `puts "${string}"`;
				break;
			case "Swift":
				return `println("${string}")`;
				break;
			case "VB .Net":
				return `Module Module1 <br>
						&emsp;	Sub Main() <br>
						&emsp;  &emsp;	Console.WriteLine("${string}") <br>
						&emsp;	End Sub <br>
						End Module`;
				break;
			case "Scala":
				return `object bahasaDaerah { <br>
  						&emsp;	def main(args: Array[String]): Unit = { <br>
    					&emsp; &emsp;	println("${string}") <br>
						&emsp;	} <br>
						}`;
				break;
			case "MATLAB":
				return `disp('${string}')`;
				break;
			case "Go":
				return `package main <br>
						import "fmt" <br>
						func main() { <br>
						&emsp;    fmt.Println("${string}") <br>
						}`;
				break;
			case "Julia":
				return `println("${string}")`;
				break;
			case "R":
				return `print("${string}")`;
				break;
			case "PL/SQL":
				return `begin <br>
						dbms_output.put_line('${string}'); <br>
						end; <br>
						/`;
				break;
			case "Algol-60":
				return `begin  <br>
						&emsp;	file rmt (kind = remote);  <br>
						&emsp;	write(rmt, <"${string}">);  <br>
						end.`;
				break;
			case "Basic":
				return `10 PRINT "${string}"`;
				break;
			case "DOS":
				return `echo ${string}`;
				break;
			case "Fortran":
				return `PROGRAM HELLOWORLD <br>
						10 FORMAT (1X,11H${string}) <br>
						WRITE(6,10)  <br>
						END`;
				break;
			case "Haskell":
				return `main = do putStrLn "${string}"`;
				break;
			case "Cobra":
				return `class bahasaDaerah
						&emsp;    def main
						&emsp; &emsp;	print '${string}'`;
				break;
		};
	
}