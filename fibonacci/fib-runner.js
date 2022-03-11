"use strict";
const recursiveFib = require('./fib-recursive');
const dynamicFib = require('./fib-dynamic');
const tabFib = require('./fib-tab')
const Timer =   require('../utils/timer');
const timer = new Timer();


console.time("Execution time");

console.log(recursiveFib(1));
console.log(recursiveFib(2));
console.log(recursiveFib(5));
console.log(recursiveFib(40));

console.timeEnd("Execution time");

console.time("Execution time");

console.log(dynamicFib(1));
console.log(dynamicFib(2));
console.log(dynamicFib(5));
console.log(dynamicFib(40));

console.timeEnd("Execution time");

console.time("Execution time");

console.log(tabFib(1));
console.log(tabFib(2));
console.log(tabFib(5));
console.log(tabFib(40));

console.timeEnd("Execution time");