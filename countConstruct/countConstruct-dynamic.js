'use strict';



function countConstruct(word, wordBank, memo = {}) {
    if (word in memo) return memo[word];
    if (word === '') return 1;

    memo[word] = 0;
    wordBank.forEach(str => {
        if (word.indexOf(str) === 0) {
            const solution = countConstruct(word.slice(str.length), wordBank, memo);
            if (solution != 0) {
                memo[word] += solution;
            }

        }
    });

    return memo[word];
}

module.exports = countConstruct;