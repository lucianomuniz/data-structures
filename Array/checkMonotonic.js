// Exercice 2: An array is monotonic if it is either monotonic increasing or monotonic decreasing. An array is monotonic increasing if all elements from left to right are non-decreasing. An array is monotonic decreasing if all its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise.

// Complexity => Time: O(n) | Space: O(1)

const isEqual = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] !== array[i]) return false;
  }
  return true;
};

const isDescending = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] < array[i]) return false;
  }
  return true;
};

const isAscending = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] > array[i]) return false;
  }
  return true;
};

const checkMonotonic = function (array) {
  const first = array[0];
  const last = array[array.length - 1];
  if (first === last) {
    return isEqual(array);
  } else if (first < last) {
    return isDescending(array);
  } else {
    return isAscending(array);
  }
};

const a = [1, 2, 3]; // true
const b = [3, 2, 1]; // true
const c = [1, 2, 2]; // true
const d = [3, 3, 3]; // true
const e = [7]; // true
const f = []; // true
const g = [2, 2, 3, 1]; // false
const h = [-1, 3, 2, 0]; // false
const i = [1, 3, 5, 2, 10]; // false
const j = [7, 7, 7, 6, 7]; // false
const k = [10, 9, 5, 8, 1]; // false

console.log(a, 'a =>', checkMonotonic(a));
console.log(b, 'b =>', checkMonotonic(b));
console.log(c, 'c =>', checkMonotonic(c));
console.log(d, 'd =>', checkMonotonic(d));
console.log(e, 'e =>', checkMonotonic(e));
console.log(f, 'f =>', checkMonotonic(f));
console.log(g, 'g =>', checkMonotonic(g));
console.log(h, 'h =>', checkMonotonic(h));
console.log(i, 'i =>', checkMonotonic(i));
console.log(j, 'j =>', checkMonotonic(j));
console.log(k, 'k =>', checkMonotonic(k));
