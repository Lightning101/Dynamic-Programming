"use strict";
const recursiveFib = require('./fib-recursive');
const dynamicFib = require('./fib-dynamic');
const Timer =   require('../utils/timer');
const timer = new Timer();


timer.start();

console.log(recursiveFib(1));
console.log(recursiveFib(2));
console.log(recursiveFib(5));
console.log(recursiveFib(40));

timer.stop();
timer.printTimeInSeconds();

timer.start();

console.log(dynamicFib(1));
console.log(dynamicFib(2));
console.log(dynamicFib(5));
console.log(dynamicFib(40));

timer.stop();
timer.printTimeInSeconds();