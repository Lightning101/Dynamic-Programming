'use strict';

const countConstructRecursive = require('./countConstruct-recursive');
const countConstructDynamic = require('./countConstruct-dynamic');




console.time("Execution time");

console.log(countConstructRecursive('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(countConstructRecursive('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstructRecursive('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(countConstructRecursive('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(countConstructRecursive('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));

console.timeEnd("Execution time");

console.time("Execution time");

console.log(countConstructDynamic('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(countConstructDynamic('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstructDynamic('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(countConstructDynamic('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(countConstructDynamic('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));

console.timeEnd("Execution time");

