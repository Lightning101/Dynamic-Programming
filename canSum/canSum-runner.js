'use strict';

const canSumRecursive = require('./canSum-recursive');
const canSumDynamic = require('./canSum-dynamic');
const canSumTab = require('./canSum-tab');

const Timer = require('../utils/timer');
const timer = new Timer();


timer.start();

console.log(canSumRecursive(7, [2, 3]));
console.log(canSumRecursive(7, [4, 3]));
console.log(canSumRecursive(7, [2, 3, 1]));
console.log(canSumRecursive(300, [7, 14]));

timer.stop();
timer.printTimeInSeconds();

timer.start();

console.log(canSumDynamic(7, [2, 3]));
console.log(canSumDynamic(7, [4, 3]));
console.log(canSumDynamic(7, [2, 3, 1]));
console.log(canSumDynamic(300, [7, 14]));

timer.stop();
timer.printTimeInSeconds();

timer.start();

console.log(canSumTab(7, [2, 3]));
console.log(canSumTab(7, [4, 3]));
console.log(canSumTab(7, [2, 3, 1]));
console.log(canSumTab(300, [7, 14]));

timer.stop();
timer.printTimeInSeconds();



