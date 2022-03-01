'use strict';



function bestSum(target, numbers) {
    if (target === 0) return [];
    if (target < 0) return null;

    let shortestCombination = null;
    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        const solution = bestSum(target - number, numbers);
        if (solution !== null) {
            const combination = [...solution, number];
            if (shortestCombination === null || combination.length < shortestCombination.length)
                shortestCombination = combination;
        }

    }
    return shortestCombination;
}

module.exports = bestSum;