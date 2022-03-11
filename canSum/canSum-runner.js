'use strict';

const canSumRecursive = require('./canSum-recursive');
const canSumDynamic = require('./canSum-dynamic');
const canSumTab = require('./canSum-tab');



console.time("Execution time");

console.log(canSumRecursive(7, [2, 3]));
console.log(canSumRecursive(7, [4, 3]));
console.log(canSumRecursive(7, [2, 3, 1]));
console.log(canSumRecursive(300, [7, 14]));

console.timeEnd("Execution time");

console.time("Execution time");

console.log(canSumDynamic(7, [2, 3]));
console.log(canSumDynamic(7, [4, 3]));
console.log(canSumDynamic(7, [2, 3, 1]));
console.log(canSumDynamic(300, [7, 14]));

console.timeEnd("Execution time");

console.time("Execution time");

console.log(canSumTab(7, [2, 3]));
console.log(canSumTab(7, [4, 3]));
console.log(canSumTab(7, [2, 3, 1]));
console.log(canSumTab(300, [7, 14]));

console.timeEnd("Execution time");



