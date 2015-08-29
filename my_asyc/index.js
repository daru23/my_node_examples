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
 * An for loop with a timeout between every cycle
 */
function workingForLoop (){

    for (var i = 0; i < 100; i ++){

        timeOut(i);

    }

}

/**
 * Set a time out and print counter in the console
 * @param number
 */
function timeOut (number){

    setTimeout(function () {
        console.log('%s second passed!', number)
    }, 1000); //sleep one second

}

workingForLoop();

/**
* Delay the process as many milliseconds as it's set
* @param milliseconds
*/
function sleep(milliseconds) {

    var start = new Date().getTime();

    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}