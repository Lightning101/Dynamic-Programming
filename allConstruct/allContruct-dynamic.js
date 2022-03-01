'use strict';

function allConstruct(target, wordBank, memo = {}) {
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    const results = [];
    wordBank.forEach(word => {
        if (target.indexOf(word) === 0) {
            const solution = allConstruct(target.slice(word.length), wordBank, memo);
            results.push(...solution.map(way => [word, ...way]));
        }
    });

    memo[target] = results;
    return results;
}
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));

module.exports = allConstruct;