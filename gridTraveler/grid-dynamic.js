'use strict';


function gridTravel(w, l, memo = {}) {
    const key = w + ',' + l;
    const keyInverse = l + ',' + w;

    if (w === 1 && l === 1) return 1;
    if (w < 1 || l < 1) return 0;
    if (memo[key]) return memo[key];
    if (memo[keyInverse]) return memo[keyInverse];

    memo[key] = gridTravel(w - 1, l, memo) + gridTravel(w, l - 1, memo);

    return memo[key];
}

module.exports = gridTravel;