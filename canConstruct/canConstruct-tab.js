'use strict';

function canConstruct(word, wordBank) {
    const table = new Array(word.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i < table.length; i++) {
        const value = table[i];

        if (value)
            for (let j = 0; j < wordBank.length; j++) {
                const testWord = wordBank[j];
                if (word.slice(i, i + testWord.length) === testWord) {
                    table[i + testWord.length] = true;
                }
            }
    }
    return table.pop();
}

module.exports = canConstruct;