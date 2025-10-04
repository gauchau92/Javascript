let arr = [25, 50, 69, 81, 7, 97];

//! Map- returns new array-- runs through each element, index, and array
let maparr = arr.map((ele, ind) => {
  console.log(ele, ind);
  return ele + ind + 1;
});
console.log(maparr);

//! Filter- returns new array-- gives filtered arrey based on codition
let filarr = arr.filter((ele) => {
  return ele > 50;
});
console.log(filarr);

//! Reduce- returns single value-- runs through each element, index, and array
let redarr = arr.reduce((acc, ele, ind, array) => {
  console.log(acc, ele, ind, array);
  return acc + ele;
}, 0);
console.log(redarr);
