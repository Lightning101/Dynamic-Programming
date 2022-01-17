'use strict';

function gridTravel(w, l) {
    if (w === 1 && l === 1) return 1;
    if (w < 1 || l < 1) return 0;
    return gridTravel(w - 1, l) + gridTravel(w, l - 1);
}

module.exports = gridTravel;