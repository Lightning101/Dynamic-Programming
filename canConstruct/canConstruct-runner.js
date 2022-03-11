'use strict';

const canConstructRecursive = require('./canConstruct-recursive');
const canConstructDynamic = require('./canConstruct-dynamic');
const canConstructTab = require('./canConstruct-tab');

const Timer = require('../utils/timer');
const timer = new Timer();



console.time("Execution time");

console.log(canConstructRecursive('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(canConstructRecursive('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstructRecursive('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstructRecursive('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstructRecursive('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));
console.timeEnd("Execution time")


console.time("Execution time");

console.log(canConstructDynamic('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(canConstructDynamic('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstructDynamic('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstructDynamic('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstructDynamic('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));

console.timeEnd("Execution time")


console.time("Execution time")

console.log(canConstructTab('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(canConstructTab('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstructTab('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstructTab('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstructTab('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));

console.timeEnd("Execution time")


