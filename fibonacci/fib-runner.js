"use strict";
const recursiveFib = require('./fib-recursive');
const dynamicFib = require('./fib-dynamic');


let start = Date.now();

console.log(recursiveFib(1));
console.log(recursiveFib(2));
console.log(recursiveFib(5));
console.log(recursiveFib(40));

let stop = Date.now();
console.log(`Time Taken to execute = ${(stop - start)/1000} seconds`);

start = Date.now();

console.log(dynamicFib(1));
console.log(dynamicFib(2));
console.log(dynamicFib(5));
console.log(dynamicFib(40));

stop = Date.now();
console.log(`Time Taken to execute = ${(stop - start)/1000} seconds`);