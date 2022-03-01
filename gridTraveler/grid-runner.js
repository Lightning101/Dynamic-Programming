'use strict';
const gridRecursive = require('./grid-recursive');
const gridDynamic = require('./grid-dynamic');
const gridTab = require('./grid-tab');

const Timer =   require('../utils/timer');
const timer = new Timer();

timer.start();

console.log(gridRecursive(2,3));
console.log(gridRecursive(3,3));
console.log(gridRecursive(15,15));

timer.stop();
timer.printTimeInSeconds();

timer.start();

console.log(gridDynamic(2,3));
console.log(gridDynamic(3,3));
console.log(gridDynamic(15,15));

timer.stop();
timer.printTimeInSeconds();

timer.start();

console.log(gridTab(2,3));
console.log(gridTab(3,3));
console.log(gridTab(15,15));

timer.stop();
timer.printTimeInSeconds();





