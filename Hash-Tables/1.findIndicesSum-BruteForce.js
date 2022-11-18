// Question 1: You are given an array of Integers and another integer targetValue. Write a function that will take these inputs and return the indices of the 2 integers in the array that add up targetValue.

// Complexity => Time: O(n^2) | Space: O(1)

const findIndicesSum = function (array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (target === array[i] + array[j]) return [i, j];
    }
  }
  return [];
};

// Test cases
const a = [2, 7, 3, -1, 4]; // t=2 [2, 3]
const b = [2, 7]; // t=9 [0, 1]
const c = [2, 7, 3, -1, 4]; // t=100 []
const d = [25]; // t=2 []
const e = []; // t=5 []
const f = [1, 2, 3, 4, 5]; // t=6 [0, 4]
const g = [2, -1, 5, 3]; // t=4 [1, 2]
const h = [1, 2, 3, 4]; // t=7 [2, 3]

console.log('a =>', findIndicesSum(a, 2));
console.log('b =>', findIndicesSum(b, 9));
console.log('c =>', findIndicesSum(c, 100));
console.log('d =>', findIndicesSum(d, 2));
console.log('e =>', findIndicesSum(e, 5));
console.log('f =>', findIndicesSum(f, 6));
console.log('g =>', findIndicesSum(g, 4));
console.log('h =>', findIndicesSum(h, 7));
