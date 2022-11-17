// Question 3. Given an array, rotate the array to the right by k steps, where k is non-negative.

// Complexity => Time: O(n) | Space: O(1)

const reverse = function (array, start, end) {
  while (start < end) {
    // const temp = array[start];
    // array[start] = array[end];
    // array[end] = temp;
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
};

function rotateArray(array, k) {
  k = k % array.length;
  reverse(array, 0, array.length - 1);
  reverse(array, 0, k - 1);
  reverse(array, k, array.length - 1);
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
