'use strict';

function bestSum(target, numbers) {
    const table = new Array(target + 1).fill().map(() => null);
    table[0] = new Array();

    for (let i = 0; i < table.length; i++) {
        const current = table[i];
        if (current !== null)
        for (let j = 0; j < numbers.length; j++) {
            const value = numbers[j];
            if (table[i + value] !== undefined) {
                const currentValue = [...current, value];
                if (!table[i + value] || table[i + value].length > currentValue.length) {
                    table[i + value] = currentValue
                } 
            }

        }

    }
    return table[target]
}

module.exports = bestSum;