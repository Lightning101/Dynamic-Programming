'use strict';



function canConstruct(word, wordBank, memo = {}) {
    if (word in memo) return memo[word];
    if (word === '') return true;

    memo[word] = false;
    wordBank.forEach(str => {
        if (word.indexOf(str) === 0) {
            const solution = canConstruct(word.slice(str.length), wordBank, memo);
            if (solution != 0) {
                memo[word] = solution;
                return memo[word]
            }
        }
    });

    return memo[word];
}

module.exports = canConstruct;