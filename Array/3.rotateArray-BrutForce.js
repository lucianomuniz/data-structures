// Question 3. Given an array, rotate the array to the right by k steps, where k is non-negative.

// Complexity => Time: O(n) | Space: O(k)

function rotateArray(array, k) {
  const length = array.length;
  k = k % length;
  const temp = array.slice(length - k); // slice is O(k) where k = end - start
  for (let i = length - k - 1; i >= 0; i--) {
    array[i + k] = array[i];
  }
  for (let i = 0; i < k; i++) {
    array[i] = temp[i];
  }
  return array;
}

// Test cases
const a = [1, 2, 3, 4]; // k=1 [4, 1, 2, 3]
const b = [1, 2, 3, 4]; // k=2 [3, 4, 1, 2]
const c = [1, 2, 3, 4]; // k=0 [1, 2, 3, 4]
const d = [1, 2, 3, 4, 5]; // k=2 [4, 5, 1, 2, 3]
const e = [1, 2, 3, 4, 5]; // k=5 [1, 2, 3, 4, 5]
const f = [1, 2, 3, 4, 5]; // k=6 [5, 1, 2, 3, 4]

console.log('a =>', rotateArray(a, 1));
console.log('b =>', rotateArray(b, 2));
console.log('c =>', rotateArray(c, 0));
console.log('d =>', rotateArray(d, 2));
console.log('e =>', rotateArray(e, 5));
console.log('f =>', rotateArray(f, 6));
