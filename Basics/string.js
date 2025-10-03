let boy1 = `Gaurav Chaudhary`;
let boy2 = `Ram`;
let boy3 = `Hanuman`;

console.log(`boy1 is friend of boy2 and boy3`);
console.log(`${boy1} is friend of ${boy2} and ${boy3}`); //! String interpolation

console.log(boy1.length);
console.log(boy1[0]);

// Escape Sequence	Meaning	Example
// \'	Single quote	'It\'s fine' → It's fine
// \"	Double quote	"He said \"Hello\"" → He said "Hello"
// \\	Backslash	"This is a backslash: \\\\" → This is a backslash: \
// \n	New line	"Hello\nWorld" → prints on two lines
// \t	Tab	"Hello\tWorld" → adds a tab space
// \r	Carriage return	"Hello\rWorld" (overwrites line start in some contexts)
// \b	Backspace	"abc\b" → may remove c depending on environment
// \f	Form feed (rarely used)	"Hello\fWorld"

console.log(boy1.toUpperCase());
console.log(boy1.toLowerCase());
console.log(boy1.slice(2, 4)); //! slice string between given start and END-1 index; index start from 0.
console.log(boy1.slice(2)); //! slice string from given index til end

console.log(boy1.replace(`Gaurav`, `Vedagya`));
console.log(boy1.concat(boy2, boy3, `OM`));

let str = "hello";
str = "yippiieee";

console.log(str);
str[0] = "Z"; // attempt to change first character
console.log(str); // still "hello"

//! printing string using for loop

for (i = 0; i < boy1.length; i++) {
  console.log(boy1[i]);
}

let result = ``;
for (i = 0; i < boy1.length; i++) {
  result += boy1[i];
}
console.log(result);
