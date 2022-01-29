'use strict';
const bestSumRecursive = require('./bestSum-recursive');
const bestSumDynamic = require('./bestSum-dynamic');


const Timer = require('../utils/timer');
const timer = new Timer();



timer.start();

console.log(bestSumRecursive(4, [2, 4]));
console.log(bestSumRecursive(7, [5, 3, 4, 7]));
console.log(bestSumRecursive(8, [2, 6, 3, 5]));
console.log(bestSumRecursive(8, [1, 4, 5]));
console.log(bestSumRecursive(35, [1, 2, 5]));

timer.stop();
timer.printTimeInSeconds();

timer.start();

console.log(bestSumDynamic(4, [2, 4]));
console.log(bestSumDynamic(7, [5, 3, 4, 7]));
console.log(bestSumDynamic(8, [2, 6, 3, 53]));
console.log(bestSumDynamic(8, [1, 4, 5]));
console.log(bestSumDynamic(35, [1, 2, 5]));

timer.stop();
timer.printTimeInSeconds();





