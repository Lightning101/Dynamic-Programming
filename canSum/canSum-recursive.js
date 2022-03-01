'use strict';

function canSum(target, numbers) {
    if (target === 0) return true;
    if (target < 0) return false;

    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        if (canSum(target - number, numbers)) {
            return true;
        }

    }
    return false;
}

module.exports = canSum;