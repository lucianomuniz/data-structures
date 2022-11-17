// Question 1: You are given an array of Integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

// Complexity => Time: O(nlogn) | Space: O(n)

function sortedSquared(array) {
  const newArray = new Array(array.length).fill(0);
  for (let i = 0; i < array.length; i++) {
    newArray[i] = Math.pow(array[i], 2);
  }
  newArray.sort(function (a, b) {
    return a - b;
  });
  return newArray;
}

// Test cases
const a = [-1, 3, 5]; // [1, 9, 25]
const b = [0, 5, 6]; // [0, 25, 36]
const c = [-4, -2, 0, 1, 3]; // [0, 1, 4, 9, 36]
const d = [-7, -2, 3, 5]; // [4, 9, 25, 49]

console.log(a, '=>', sortedSquared(a));
console.log(b, '=>', sortedSquared(b));
console.log(c, '=>', sortedSquared(c));
console.log(d, '=>', sortedSquared(d));
