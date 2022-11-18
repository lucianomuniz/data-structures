# Data structures

## Code challenge algorithms

### Day 1 - Arrays

#### Sorted Squared Array

1. You are given an array of Integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

#### Monotonic Array

2. An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements from left to right are non-decreasing. An array is monotone decreasing if all its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise.

### Day 2 - Arrays (continue)

#### Rotate Array

3. Given an array, rotate the array to the right by k steps, where k is non-negative.

#### Container With Most Water

4. Container with most Water - You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water(depth is constant across containers). Return the area(that the 2 lines and the X axis make) of container which can store the max amount of water. Notice that you may not slant the container.

### Day 3 - Hash Tables

#### Two Sum

1. You are given an array of Integers and another integer targetValue. Write a function that will take these inputs and return the indices of the 2 integers in the array that add up targetValue.

#### Isomorphic Strings

2. Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. s and t consist of any valid ascii character.

### Day 4 - Recursion

#### Fibonacci

1. In the Fibonacci sequence, each subsequent term is obtained by adding the preceding 2 terms. This is true for all the numbers except the first 2 numbers of the Fibonacci series as they do not have 2 preceding numbers. The first 2 terms in the Fibonacci series is 0 and 1. F(n) = F(n-1)+F(n-2) for n>1. Write a function that finds F(n) given n where n is an integer greater than equal to 0. For the first term n = 0.

#### Power Sum

2. Let's define a peculiar type of array in which each element is either an integer or another peculiar array. Assume that a peculiar array is never empty. Write a function that will take a peculiar array as its input and find the sum of its elements. If an array is an element in the peculiar array you have to convert it to it's equivalent value so that you can sum it with the other elements. Equivalent value of an array is the sum of its elements raised to the number which represents how far nested it is. For e.g. [2,3[4,1,2]] = 2+3+(4+1+2)^2

- [1,2,[7,[3,4],2]] = 1 + 2 + (7+(3+4)^3+2)^2
