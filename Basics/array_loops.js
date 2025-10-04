let arr = [3, 4, 1, 2, 6];

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//! For-each loop-- runs through each element
arr.forEach((element) => {
  console.log(element ** 2);
});

//! Array.From loop -- coneverts to arrey
let naam = `javascript`;
let ary = Array.from(naam);
console.log(ary);

//! for-of loop goes through elements
for (let ele of naam) {
  console.log(ele);
}

//! for-in loop goes through elements' index
for (let ele in naam) {
  console.log(ele);
}
