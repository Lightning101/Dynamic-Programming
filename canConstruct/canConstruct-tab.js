'use strict';

function canConstruct(word, wordBank) {
    const table = new Array(word.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i < table.length; i++) {
        const value = table[i];

        if (value)
            for (let j = 0; j < wordBank.length; j++) {
                const testWord = wordBank[j];
                const subWord = word.substring(i, word.length);
                const index = subWord.indexOf(testWord);
                if (index === 0) {
                    table[i+ testWord.length] = true;
                }


            }
    }
    return table.pop();
}

module.exports = canConstruct;