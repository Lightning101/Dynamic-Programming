'use strict';

function allConstruct(word, wordBank) {
    if (word === '') return [[]];

    let solutions = [];
    wordBank.forEach(str => {
        if (word.indexOf(str) === 0) {
            const solution = allConstruct(word.slice(str.length), wordBank);
            if (solution != null) {
                solution.forEach(arr => arr.unshift(str));
                solutions.push(...solution);
            }

        }
    });

    return solutions;
}

module.exports = allConstruct;