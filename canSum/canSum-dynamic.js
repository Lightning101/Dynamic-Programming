'use strict';

function canSum(target, numbers, memo = {}) {
    if (target in memo) return memo[target];
    if (target === 0) return true;
    if (target < 0) return false;
    

    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        const remainder = target - number;
        
        if (canSum(remainder, numbers, memo)) {
            memo[target] = true;
            return true;
        }

    }
    memo[target] = false;
    return false;
}

module.exports = canSum;