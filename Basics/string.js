let boy1 = `Gaurav`;
let boy2 = `Ram`;
let boy3 = `Hanuman`;

console.log(`boy1 is friend of boy2 and boy3`);
console.log(`${boy1} is friend of ${boy2} and ${boy3}`); //! String interpolation

console.log(boy1.length);
console.log(boy1[0]);

let idea = 'Gaurav\'s idea'; //! Escape sequence
console.log(idea);
console.log(idea.length);
console.log(idea[5]);
console.log(idea[6]);


// Escape Sequence	Meaning	Example
// \'	Single quote	'It\'s fine' → It's fine
// \"	Double quote	"He said \"Hello\"" → He said "Hello"
// \\	Backslash	"This is a backslash: \\\\" → This is a backslash: \
// \n	New line	"Hello\nWorld" → prints on two lines
// \t	Tab	"Hello\tWorld" → adds a tab space
// \r	Carriage return	"Hello\rWorld" (overwrites line start in some contexts)
// \b	Backspace	"abc\b" → may remove c depending on environment
// \f	Form feed (rarely used)	"Hello\fWorld"