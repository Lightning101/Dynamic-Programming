'use strict';



function gridTravel(w, l) {
    const table = new Array(w + 1)
        .fill()
        .map(() => new Array(l + 1).fill(0))
    table[1][1] = 1;

    for (let i = 0; i <= w; i++) {
        for (let j = 0; j <= l; j++) {
            const value = table[i][j];

            if (j + 1 <= l)
                table[i][j + 1] += value;

            if (i + 1 <= w)
                table[i + 1][j] += value;
        }
    }
    return table[w][l];
}

module.exports = gridTravel;