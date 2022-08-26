// Program with a Promise
const count = true;
let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});
console.log(countValue);



// Chaining the Promise with then()
// returns a promise
let countValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
  });
  // executes when promise is resolved successfully
  countValue
    .then(function successValue(result) {
      console.log(result);
    })
  
    .then(function successValue1() {
      console.log("You can call multiple functions this way.");
    });





// JavaScript catch() method
// returns a promise
let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected'); 
 });
 
 // executes when promise is resolved successfully
 countValue.then(
     function successValue(result) {
         console.log(result);
     },
  )
 
 // executes if there is an error
 .catch(
     function errorValue(result) {
         console.log(result);
     }
 );





// JavaScript finally() method
// returns a promise
let countValue = new Promise(function (resolve, reject) {
    // could be resolved or rejected   
    resolve('Promise resolved'); 
});
// add other blocks of code
countValue.finally(
    function greet() {
        console.log('This code is executed.');
    }
);





var promise = new Promise(function(resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
    promise.
        then(function () {
            console.log('Success, You are a GEEK');
        }).
        catch(function () {
            console.log('Some error has occurred');
        });





var promise = new Promise(function(resolve, reject) {
    const x = "I AM SOFTWARE DEVLOPER";
    const y = "I WAS START MY CORDING JOURNEY FROM NAVGURUKUL"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
    promise.
        then(function () {
            console.log('Success, You are a SOFTWARE DEVLOPER');
        }).
        catch(function () {
            console.log('Some error has occurred');
        });





 function f1() {
        console.log('f1');
    }
    function f2() {
        console.log('f2');
    }
    function main() {
        console.log('main');
        setTimeout(f1, 1000);
        
        new Promise((resolve, reject) =>
            resolve('I am a promise')
        ).then(resolve => console.log(resolve))
        f2();
    }
    main();
