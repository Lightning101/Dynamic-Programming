'use strict';


function binarySort(numbers) {
    if (numbers.length == 1) return numbers;

    const mid = numbers.length / 2;

    const left = binarySort(numbers.slice(0, mid));
    left.sort();

    const right = binarySort(numbers.slice(mid, numbers.length));
    right.sort();

    const result = [...left,...right];
    return result.sort();

}

console.log(binarySort([12, 11, 13, 5, 6, 7]));


