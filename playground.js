console.log("hi");
// Path: playground.js

const myArr = [1, 2, 3, 4];
// myArr.concat([3,2,1], [3,2,1])
// console.log(myArr.splice(3));// myArr =[1,2,3] splice changes the myArr and doesnt create a copy
//console.log(myArr.slice(1, 3)); // myArr = [2,3] slice creates a copy of the array

const arrayLike = {
  length: 2,
  0: "a",
  1: "b",
  2: "c", // ignored by at() since length is 2
};
//   console.log(Array.prototype.at.call(arrayLike, 0)); // "a"
//   console.log(Array.prototype.at.call(arrayLike, 2)); // undefined

// console.log(arrayLike.at(0));

// console.log([1, 7, 3, 8, 4, 6].copyWithin(3, 0));//[1,7,3,1,4,6]

// const array1 = ['a', 'b', 'c', "d"];

// const iterator1 = array1.entries();

// console.log(iterator1.next().value);
// // Expected output: Array [0, "a"]

// console.log(iterator1.next().value);
// // Expected output: Array [1, "b"]

// console.log(iterator1.next().value);

// console.log(iterator1.next().value);



console.log([1, 1,1,1,2,1].every(item => item == 1))


const array1 = [1, 30, 39, 29, 10, 13];
const array2 = [1, 30]

console.log(array2.every((value )=> array1.includes(value)))
// console.log(array1.every(item=> item > 1));

console.log(Array(2).fill(2))
console.log(Array.from({length: 4}).fill(2))