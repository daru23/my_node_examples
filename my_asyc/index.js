/*
 * index.js
 *
 * This module is to test and solve some of the problems that I've found while I've been  programing with
 * asynchronous functions
 *
 *-----------------------------------------------------
 * Author: Daniela Ruiz
 * Email: daru015@gmail.com
 *-----------------------------------------------------
 */

/* Asyncronic loop with delay */

/* Not working way */
/**
 * An for loop with a timeout between every cycle
 * What is happening?
 * The setTimeout is being execute but when the variable is going to be print
 * it is looking to a reference of this variable, witch is already increment,
 * because the for loop was already execute
 * @method notWorkingForLoop
 */

function notWorkingForLoop (){

    for (var i = 0; i < 100; i ++){

        setTimeout(function () {
            console.log('one second passed!')
        }, 1000); //sleep one second

    }

}

/* Working way */

/**
 * Set a time out and print counter in the console
 *
 * @method timeOut
 * @param {Integer} number
 */
function timeOut (number){

    setTimeout(function (number) {
        console.log('%s second passed!', number);
    }, 1000*number); //sleep one second

}

/**
 * An for loop with a timeout between every cycle
 * Solution: bound the setTimeout to the loop's variable
 * so the loop will be delay in every cycle, and then the
 * print of the variable in the console will be one ever X
 * seconds
 *
 * @method workingForLoop
 */
function workingForLoop (){

    for (var i = 0; i < 10; i ++){
        timeOut(i);
    }

}

/**
 * Callback sintax
 *
 * @method forLoopWithCallback
 * @param {Function} callback
 */
function forLoopWithCallback (callback){

    for (var i = 0; i < 10; i ++){
        callback(i);
    }
}


/*

/*
 * Nested way to use it
 * @method forLoopWithCallback
 */
forLoopWithCallback(function (x) {

    setTimeout(function () {
        forLoopWithCallback(function (y) {

            setTimeout(function (x, y) {
                console.log('first loop %s second loop %s',x, y);
            }, 2000*x*y, x, y); // play with this numbers

        });
    }, 1000*x);

});

/**
* Delay the process as many milliseconds as it is set
*
* @method sleep
* @param {Integer} milliseconds
*/
function sleep(milliseconds) {

    var start = new Date().getTime();

    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}