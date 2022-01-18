'use strict';

function canSum(target, numbers, memo = {}) {
    if (target === 0) return true;
    if (target < 0) return false;

    const key = target.toString();
    if (memo[key]) return memo[key];

    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        const remainder = target - number;
        
        if (canSum(remainder, numbers, memo)) {
            memo[key] = true;
            return true;
        }

    }
    memo[key] = true;
    return false;
}

module.exports = canSum;