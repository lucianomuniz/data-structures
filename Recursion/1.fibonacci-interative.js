// Question 1: In the Fibonacci sequence, each subsequent term is obtained by adding the preceding 2 terms. This is true for all the numbers except the first 2 numbers of the Fibonacci series as they do not have 2 preceding numbers. The first 2 terms in the Fibonacci series is 0 and 1. F(n) = F(n-1)+F(n-2) for n>1. Write a function that finds F(n) given n where n is an integer greater than equal to 0. For the first term n = 0.

// Complexity => Time: O(n) | Space: O(1)

const fibonacci = function (n) {
  if (n <= 1) return n;
  let counter = 1;
  let prev = 0;
  let curr = 1;
  let next = 0;
  while (counter < n) {
    next = prev + curr;
    prev = curr;
    curr = next;
    counter++;
  }
  return curr;
};

// Test cases
const x = 1; // 1
const a = 2; // 1
const b = 3; // 2
const c = 5; // 5
const d = 6; // 8
const e = 8; // 21
const f = 0; // 0
const g = 4; // 3

console.log('1 =>', fibonacci(x));
console.log('2 =>', fibonacci(a));
console.log('3 =>', fibonacci(b));
console.log('5 =>', fibonacci(c));
console.log('6 =>', fibonacci(d));
console.log('8 =>', fibonacci(e));
console.log('0 =>', fibonacci(f));
console.log('4 =>', fibonacci(g));
