let marks = {
  harry: 90,
  ram: 80,
  shyam: 70,
  ramesh: 60,
};

//          Q1
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    `the marks of ` +
      Object.keys(marks)[i] +
      ` are ` +
      marks[Object.keys(marks)[i]]
  );
}

//          Q1-2
for (let j in marks) {
  console.log(`the marks of ` + j + ` are ` + marks[j]);
}

//          Q2
function avg5(a, b, c, d, e) {
  return (a + b + c + d + e) / 5;
}
console.log(avg5(1, 2, 3, 4, 5));

//          Q2-2
const avg5 = function (p, q, r, s, t) {
  return (p + q + r + s + t) / 5;
};

//          Q2-3
const avg5 = (u, v, w, x, y, z) => (u + v + w + x + y + z) / 6;
