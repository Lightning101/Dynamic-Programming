'use strict';

// Suffers from combination issues eg:
// abcdef -> abc,def
// abcdef -> def, abc
// function canConstruct(word, wordBank) {
//     if (word === '') return 1;

//     let waysNum = 0;
//     wordBank.forEach(str => {
//         if (word.includes(str)) {
//             const solution = canConstruct(word.replace(str, ''), wordBank);
//             if (solution != 0) {
//                 waysNum += solution;
//             }

//         }
//     });

//     return waysNum;
// }
function countConstruct(word, wordBank) {
    if (word === '') return 1;

    let waysNum = 0;
    wordBank.forEach(str => {
        if (word.indexOf(str) === 0) {
            const solution = countConstruct(word.slice(str.length), wordBank);
            if (solution != 0) {
                waysNum += solution;
            }

        }
    });

    return waysNum;
}

module.exports = countConstruct;