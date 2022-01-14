"use strict";
// O(n^2)
function fib(x) {
    if (x <= 2) return 1;
    return fib(x - 1) + fib(x - 2);
}

module.exports = fib;