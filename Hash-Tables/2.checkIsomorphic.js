// Question 2: Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. s and t consist of any valid ascii character.

// Complexity => Time: O(n) | Space: O(1)

const checkIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const sHash = {};
  const tHash = {};
  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];
    if (!sHash[charS]) sHash[charS] = charT;
    if (!tHash[charT]) tHash[charT] = charS;
    if (sHash[charS] !== charT || tHash[charT] !== charS) return false;
  }
  return true;
};

// Test cases
const x1 = 'ab';
const x2 = 'cc'; // false
const a1 = 'abacus';
const a2 = 'rirfgs'; // true
const b1 = 'aba';
const b2 = 'pqr'; //false
const c1 = 'ababr';
const c2 = 'eoeoo'; //false
const d1 = 'ababr';
const d2 = 'pqrqo'; //false
const e1 = 'green';
const e2 = 'abccd'; //true
const f1 = 'abc';
const f2 = 'pq'; //false

console.log('x =>', checkIsomorphic(x1, x2));
console.log('a =>', checkIsomorphic(a1, a2));
console.log('b =>', checkIsomorphic(b1, b2));
console.log('c =>', checkIsomorphic(c1, c2));
console.log('d =>', checkIsomorphic(d1, d2));
console.log('e =>', checkIsomorphic(e1, e2));
console.log('f =>', checkIsomorphic(f1, f2));
// console.log('g =>', areIsomorphic(g1, g2));
// console.log('h =>', areIsomorphic(h1, h2));
