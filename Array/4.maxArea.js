// Question 4: Container with most Water - You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water(depth is constant across containers). Return the area (that the 2 lines and the X axis make) of container which can store the max amount of water. Notice that you may not slant the container.

// Complexity => Time: O(n) | Space: O(1)

function maxArea(array) {
  let area = 0;
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    let width = j - i; // max width
    let height = Math.min(array[i], array[j]);
    area = Math.max(area, height * width);
    array[i] < array[j] ? i++ : j--;
  }
  return area;
}

// Test cases
const a = [1, 5, 6, 3, 4]; // area = 12
const b = [10, 6, 5, 6, 5, 7]; // area = 35
const c = [3, 7, 5, 6, 8, 4]; // area = 21
const d = []; // area = 0
const e = [10]; // area = 0
const f = [9, 1, 2, 3, 10]; // area = 36

console.log('a =>', maxArea(a));
console.log('b =>', maxArea(b));
console.log('c =>', maxArea(c));
console.log('d =>', maxArea(d));
console.log('e =>', maxArea(e));
console.log('f =>', maxArea(f));
