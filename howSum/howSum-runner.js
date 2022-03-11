'use strict';
const howSumRecursive = require('./howSum-recursive');
const howSumDynamic = require('./howSum-dynamic');
const howSumTab = require('./howSum-tab');




console.time("Execution time");

console.log(howSumRecursive(7, [2, 3]));
console.log(howSumRecursive(7, [4, 3]));
console.log(howSumRecursive(7, [2, 3, 1]));
console.log(howSumRecursive(300, [7, 14]));

console.timeEnd("Execution time");

console.time("Execution time");

console.log(howSumDynamic(7, [8, 9, 2, 3]));
console.log(howSumDynamic(7, [4, 3]));
console.log(howSumDynamic(7, [2, 3, 1]));
console.log(howSumDynamic(300, [7, 14]));

console.timeEnd("Execution time");

console.time("Execution time");

console.log(howSumTab(7, [8, 9, 2, 3]));
console.log(howSumTab(7, [4, 3]));
console.log(howSumTab(7, [2, 3, 1]));
console.log(howSumTab(300, [7, 14]));

console.timeEnd("Execution time");

