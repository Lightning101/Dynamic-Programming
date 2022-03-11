'use strict';

function canConstruct(word, wordBank) {
    if (word === '') return true;

    for (let index = 0; index < wordBank.length; index++) {
        const str = wordBank[index];
        if (word.indexOf(str) === 0) {
            const solution = canConstruct(word.slice(str.length), wordBank);
            if (solution != 0) {
                return true;
            }

        }
    }

    return false;
}

module.exports = canConstruct;