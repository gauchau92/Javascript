let arr = [28, "Hi", null, undefined, NaN, true, false, 100, "array"];
console.log(arr.length);
console.log(arr[1]);
arr[7] = 82;
console.log(arr);

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let str = arr.toString(); //! converts arrey to string
console.log(str, typeof str);

let join1 = arr.join("_"); //! adds specified item to arrey and converts to string
console.log(join1, typeof join1);

arr.pop(); //! removes last item
console.log(arr);

arr.push("Last"); //! Adds last item
console.log(arr);

arr.shift(); //! removes first item
console.log(arr);

let unsft = arr.unshift("First"); //! Adds first item & return length
console.log(unsft);
console.log(arr);

delete arr[0]; //! deletes item from array but length doesn't change
console.log(arr);

let arr1 = [1, 2, 3];
let arr2 = [6, 5, 4];
let arr3 = [8, 9, 7];

console.log(arr1.concat(arr2, arr3)); //! adds arrays
console.log(arr1.concat(arr2, arr3).sort()); //! sort arrays

//! sort func modifies the main arrays & sorts in alphanumeric order so to overcome that we need to give compare function to actual sort in asending order.

let arr4 = arr1.concat(arr2, arr3);
console.log(arr4.sort((a, b) => a - b));

//? or else create compare fun outside and call that
const compare = (a, b) => a - b;
console.log(arr4.sort(compare));

console.log(arr4.reverse()); //! reverse the array

let arr5 = [656, 454, 564, 659, 979, 323, 54515];
arr5.splice(2, 3, 848, 26, 31315, 10110, 7965212); //! splice:- removes and add items to array & returns deleted items. Start index-2, deleted-3, added remianing items at that place
console.log(arr5);
console.log(arr5.length);

//console.log(arr5.slice(3)); //! returns new array of sliced piece
console.log(arr5.slice(3, 7)); //! returns new array of sliced piece start 3 to 6 (7 not included)
