'use strict';

class Timer 
{
    initial;
    end;
    constructor(){
        this.initial = null;
        this.end = null;
    }

    start()
    {
        this.initial =  Date.now();
    }

    stop()
    {
        this.end =  Date.now();
    }

    printTimeInSeconds()
    {
        console.log(`Time Taken to execute = ${(this.end - this.initial)/1000} seconds`);
    }
};

module.exports = Timer;
