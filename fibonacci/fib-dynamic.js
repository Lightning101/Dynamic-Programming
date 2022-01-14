'use strict';
// Memoization
// By keeping stored values for parts of tree we can reuse value
// O(n)
function fib(x, memo = {}) {
    if (memo[x]) return memo[x];
    if (x <= 2) return 1;

    memo[x] = fib(x - 1, memo) + fib(x - 2, memo);
    return memo[x];
}

module.exports = fib;