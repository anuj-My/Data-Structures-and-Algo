// ! The Problem With Time

// --> different machines will recond different times
// --> The same machine will record different times!
// --> For fast algorithms, speed measurements may not be precise enough?

// ! If not time, then what?

// --> Rather than counting seconds, which are so variable..
// --> Lets count the number of simple operations the comupter has to perform!

// ! 🔍 What is Big O Notation?
// --> Big O notation is a way to describe how the runtime or space usage of an algorithm grows as the input size increases.

// --> It tells you how fast your algorithm gets slower as the input gets bigger — without worrying about exact numbers or constants.

// ! ⏱ Common Growth Rates (explained simply)

// O(1): Constant time
// Takes the same time no matter the input size. Like accessing an element in an array by index.

// O(log n): Logarithmic time
// Super efficient. Every step cuts the problem in half. Example: binary search.

// O(n): Linear time
// Time grows directly with input. If the list doubles, the time doubles. A simple loop through a list.

// O(n log n): Slightly more than linear
// Shows up in efficient sorting algorithms like merge sort.

// O(n²): Quadratic time
// Gets slow quickly. Happens with nested loops — like comparing every pair in a list.

// O(2ⁿ) or O(n!): Exponential time
// Extremely slow. These show up in brute-force algorithms or recursion-heavy problems (like solving puzzles or traveling salesman).

// ! 🔧 Big O Ignores Details
// Big O focuses on the big picture. So it doesn’t care about:

// Exact time or number of steps

// Constants (O(2n) is still O(n))

// Lower-order terms (O(n² + n) is still O(n²))
