// // async function example
// async function f() {
//     console.log('Async function.');
//     return Promise.resolve(1);
// }
//

// async function f() {
//     console.log('Async function.');
//     return Promise.resolve(1);
// }
// f().then(function(result) {
//     console.log(result)
// });



// // Error Handling
// // a promise
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve('Promise resolved')}, 4000); 
// });
// // async function
// async function asyncFunc() {
//     try {
//         // wait until the promise resolves 
//         let result = await promise; 

//         console.log(result);
//     }   
//     catch(error) {
//         console.log(error);
//     }
// }
// // calling the async function
// asyncFunc(); // Promise resolved