let fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits);

fruits = null; // fruits array is now null, but the original array still exists in memory
console.log(fruits); // Output: null

fruits = ["kiwi", "melon"]; // fruits now references a new array, but the original array is still in memory
console.log(fruits); // Output: ["kiwi", "melon"]