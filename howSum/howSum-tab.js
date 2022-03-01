'use strict';



function howSum(targetSum, numbers) {
    const table = new Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i < table.length; i++) {
        const value = table[i];
        if (value === null)
            continue;
        for (let j = 0; j < numbers.length; j++) {
            const num = numbers[j];
            if (table[i + num] === undefined)
                continue;
            table[i + num] = [...value, num];

        }

    }
    return table[targetSum];

}

module.exports = howSum;