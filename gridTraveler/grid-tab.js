'use strict';



function gridTravel(w, l) {
    const table = new Array(w + 1)
        .fill()
        .map(() => new Array(l + 1).fill(0))
    table[1][1] = 1;

    for (let i = 0; i <= w; i++) {
        for (let j = 0; j <= l; j++) {
            const value = table[i][j];

            if (table[i][j + 1] !== undefined)
                table[i][j + 1] += value;
            
            if (table[i+1] !== undefined && table[i+1][j] !== undefined)
                table[i+1][j] += value;
        }
    }
    return table[w][l];
}

module.exports = gridTravel;