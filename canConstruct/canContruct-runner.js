'use strict';

const canConstructRecursive = require('./canContruct-recursive');
const canConstructDynamic = require('./canContruct-dynamic');

const Timer = require('../utils/timer');
const timer = new Timer();



timer.start();

console.log(canConstructRecursive('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(canConstructRecursive('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstructRecursive('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstructRecursive('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstructRecursive('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));

timer.stop();
timer.printTimeInSeconds();

timer.start();

console.log(canConstructDynamic('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(canConstructDynamic('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstructDynamic('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstructDynamic('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstructDynamic('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));

timer.stop();
timer.printTimeInSeconds();

