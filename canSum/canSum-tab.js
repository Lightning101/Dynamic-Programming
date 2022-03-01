'use strict';



function canSum(targetSum, numbers)
{
    const table = new Array(targetSum +1).fill(false);
    table[0]= true;

    for (let i = 0; i < table.length; i++) {
        const currentValue = table[i];
        
        if(!currentValue)
        continue;
        for (let j = 0; j < numbers.length && (i+numbers[j]) < table.length ; j++) 
            table[i+numbers[j]] = currentValue;
        
    }

    return table[targetSum];
} 
module.exports  = canSum;