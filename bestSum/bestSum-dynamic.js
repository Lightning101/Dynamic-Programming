'use strict';



function bestSum(target, numbers, memo = {}) {
    if (target in memo) return memo[target]
    if (target === 0) return [];
    if (target < 0) return null;

    memo[target] = null;
    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        const solution = bestSum(target - number, numbers, memo);
        if (solution !== null) {
            const combination = [...solution, number];
            if (memo[target] === null || combination.length < memo[target].length)
                memo[target] = combination;
        }

    }
    return memo[target];

}


module.exports = bestSum;