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
