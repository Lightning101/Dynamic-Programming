'use strict';
const howSumRecursive = require('./howSum-recursive');
const howSumDynamic = require('./howSum-dynamic');


const Timer = require('../utils/timer');
const timer = new Timer();


timer.start();

console.log(howSumRecursive(7, [2, 3]));
console.log(howSumRecursive(7, [4, 3]));
console.log(howSumRecursive(7, [2, 3, 1]));
console.log(howSumRecursive(300, [7, 14]));

timer.stop();
timer.printTimeInSeconds();

timer.start();

console.log(howSumDynamic(7, [8, 9, 2, 3]));
console.log(howSumDynamic(7, [4, 3]));
console.log(howSumDynamic(7, [2, 3, 1]));
console.log(howSumDynamic(300, [7, 14]));

timer.stop();
timer.printTimeInSeconds();

