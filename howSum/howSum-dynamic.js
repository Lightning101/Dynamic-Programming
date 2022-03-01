'use strict';

function howSum(target, numbers, memo = {}) {
    if (target in memo) return memo[target];
    if (target === 0) return [];
    if (target < 0) return null;

    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        const solution = howSum(target - number, numbers, memo);
        if (solution !== null) {
            memo[target] = [...solution, number];
            return memo[target];
        }

    }
    memo[target] = null;
    return null;
}

module.exports = howSum;