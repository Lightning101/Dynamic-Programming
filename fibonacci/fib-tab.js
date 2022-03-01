'use strict';


function fib(n) {
    const array = new Array(n + 1).fill(0);
    array[1] = 1;
    for (let index = 0; index <= n; index++) {
        const value = array[index];
            array[index + 1] += value;
            array[index + 2] += value;
    }
    return array[n];
}

module.exports  = fib;