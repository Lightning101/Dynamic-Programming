'use strict';

function howSum(target, numbers) {
    if (target === 0) return [];
    if (target < 0) return null;

    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        const solution = howSum(target - number, numbers);
        if ( solution !== null) {
            solution.push(number);
            return solution;
        }

    }
    return null;
}

module.exports = howSum;