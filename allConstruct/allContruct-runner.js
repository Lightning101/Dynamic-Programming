'use strict';

const allConstructRecursive = require('./allContruct-recursive');
const allConstructDynamic = require('./allContruct-dynamic');

const Timer = require('../utils/timer');
const timer = new Timer();



console.time("Execution time");

console.log(allConstructRecursive('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstructRecursive('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(allConstructRecursive('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstructRecursive('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(allConstructRecursive('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));

console.timeEnd("Execution time");

console.time("Execution time");

console.log(allConstructDynamic('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstructDynamic('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(allConstructDynamic('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstructDynamic('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(allConstructDynamic('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));

console.timeEnd("Execution time");

