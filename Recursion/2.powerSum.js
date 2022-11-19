// Question 2: Let's define a peculiar type of array in which each element is either an integer or another peculiar array. Assume that a peculiar array is never empty. Write a function that will take a peculiar array as its input and find the sum of its elements. If an array is an element in the peculiar array you have to convert it to it's equivalent value so that you can sum it with the other elements. Equivalent value of an array is the sum of its elements raised to the number which represents how far nested it is. For e.g. [2,3[4,1,2]] = 2 + 3 + (4 + 1 + 2)^2
// [1,2,[7,[3,4],2]] = 1 + 2 + (7 + (3 + 4)^3 + 2)^2

// Complexity => Time: O(n) | Space: O(d) d=maximum depth of recursive call at once

const powerSum = function (array, power = 1) {
  let sum = 0;
  for (const element of array) {
    sum += Array.isArray(element) ? powerSum(element, power + 1) : element;
  }
  return Math.pow(sum, power);
};

// Test cases
const a = [1, 2, 3]; // 1 + 2 + 3 = 6
const b = [1, 2, [3]]; // 1 + 2 + (3^2) = 12
const c = [2, 3, [4, 1, 2]]; // 2 + 3 + (4 + 1 + 2)^2 = 54
const d = [1, 2, [3, 4], [[2]]]; // 1 + 2 + (3,4)^2 + ((2)^2)^3 = 116
const e = [1, 2, [7, [3, 4], 2]]; // 1 + 2 + (7 + (3 + 4)^3 + 2)^2 = 123907

console.log(a, '=>', powerSum(a));
console.log(b, '=>', powerSum(b));
console.log(c, '=>', powerSum(c));
console.log(d, '=>', powerSum(d));
console.log(e, '=>', powerSum(e));
