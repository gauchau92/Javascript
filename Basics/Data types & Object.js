/*
Data Types in JavaScript:-
    Primitive Data Types
   - Null
   - Number
   - String
   - Symbol (ES6)
   - Boolean
   - BigInt (ES11)
   - Undefined

NNSSBBU:- No need of smart students but be unhappy.
*/

let a = null;
let b = 345;
let c = "this is a string";
let d = Symbol("This is a symbol");
let e = true; //or false
let f = BigInt("567") + BigInt("3");
let g = undefined;
let h; //undefined

console.log(a, b, c, d, e, f, g, h);
console.log(
  typeof a,
  typeof b,
  typeof c,
  typeof d,
  typeof e,
  typeof f,
  typeof g,
  typeof h
);

console.log(a == null);

// In JavaScript, null is indeed a primitive value (like undefined, string, number, etc.).
// Due to a bug in the original implementation of JavaScript, typeof null incorrectly returns "object".
// This bug comes from the way values were represented in the very first version of JavaScript:
// Values were stored as tagged references.
// The type tag for objects was 0.
// null was represented as the null pointer (0x00).
// So when typeof checked the tag, it saw 0 and assumed it was an object.

const product = {
  name: "item",
  price: 150,
  healthy: "true",
  barcode: undefined,
};
console.log(product);
console.log(product["healthy"]);
// we can also use dot notation to access the properties of an object
console.log(product.name);
console.log(product.price);
console.log(product.barcode);
console.log(product.rating); //undefined
