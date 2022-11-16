// Exercice 1: You are given an array of integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squeres of each number sorted in ascending order.

// Complexity => Time: O(n) | Space: O(n)

function sortedSquared(array) {
  const newArray = new Array(array.length).fill(0);
  let pointerLeft = 0;
  let pointerRight = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    const leftSquared = Math.pow(array[pointerLeft], 2);
    const rightSquared = Math.pow(array[pointerRight], 2);
    if (leftSquared > rightSquared) {
      newArray[i] = leftSquared;
      pointerLeft++;
    } else {
      newArray[i] = rightSquared;
      pointerRight--;
    }
  }
  return newArray;
}

const a = [-1, 3, 5]; // [1, 9, 25]
const b = [0, 5, 6]; // [0, 25, 36]
const c = [-4, -2, 0, 1, 3]; // [0, 1, 4, 9, 36]
const d = [-7, -2, 3, 5]; // [4, 9, 25, 49]
const e = []; // []

console.log(a, '=>', sortedSquared(a));
console.log(b, '=>', sortedSquared(b));
console.log(c, '=>', sortedSquared(c));
console.log(d, '=>', sortedSquared(d));
console.log(e, '=>', sortedSquared(e));
