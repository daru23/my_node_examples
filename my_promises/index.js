/*
 * index.js
 *
 * Test Promises using es6.-promise
 *
 * Apply several promises to objects stored in an array
 * This promises have some time delay to reflect the waiting for the response
 *-----------------------------------------------------
 * Author: Daniela Ruiz
 * Email: daru015@gmail.com
 *-----------------------------------------------------
 */

/* Require Packages */

var Promise = require('es6-promise').Promise; // I promiseeeee!

/**
 * Apply promises to object in an array
 * @param array
 * @returns {Promise}
 */
function myArrayLoopPromise (array){

    // array = [ { value : 1 }  , { value : 2 }, { value : 3} ]
    return new Promise(function (resolve, reject) {

        var finalArray = [];

        array.forEach(function (item) { // for each item in array it will apply the promises in the array of promises

            Promise.all([myFirstPromise(item.value), mySecondPromise(item.value)]).then(function (result) {

                finalArray.push({myFirstPromise : result[0], mySecondPromise : result[1]}); //store the result in a new array

            });
        });

        resolve(finalArray); // return what I promised
    })
}

/**
 * Simple Promise return value * 2 after it waits 3 seconds
 * @param value
 * @returns {Promise}
 */
function myFirstPromise (value) {

    return new Promise(function(resolve, reject){
        sleep(3000);
        resolve(value *2);

    });
}

/**
 * Simple Promise return value - 1 after it waits 1 seconds
 * @param value
 * @returns {Promise}
 */
function mySecondPromise (value) {

    return new Promise(function(resolve, reject){
        sleep(1000);
        resolve(value -1);

    });
}

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

/* Mini Tests */
/* You can define as many promise as you want to be a apply */
myArrayLoopPromise([ { value : 1 }  , { value : 2 }, { value : 3} ]).then(function(finalArray){console.log(finalArray)});

//myFirstPromise(2).then(function(result){console.log(result)});
//mySecondPromise(2).then(function(result){console.log(result)});
