// const sayHello = function() {
//     return function() {
//        console.log("Hello!");
//     }
// }
// const myFunc = sayHello();
// myFunc();
// // Hello!
 

// function sayHello() {
//     return function() {
//        console.log("Hello!");
//     }
// }
// sayHello()();
// // Hello!
 


// function sayHello() {
//     return "Hello, ";
// }
// function greeting(helloMessage, name) {
//    console.log(helloMessage() + name);
// }
// // Pass `sayHello` as an argument to `greeting` function
// greeting(sayHello, "JavaScript!");
// // Hello, JavaScript!

 
// const radius=[3,1,2,4];
// const area=function(radius){
//     return Math.PI*radius*radius;
// };

// const circurmferance=function(radius){
//     return 2*Math.PI*radius;
// };

// const diameter=function(radius){
//     return 2*radius;
// }

// const calculate=function(radius,logic){
//     const output=[];
//     for(var i=0;i<radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }
// // console.log(radius.map(area));
// console.log(calculate(radius,area));
// console.log(calculate(radius,circurmferance));
// console.log(calculate(radius,diameter));



// const isEven = (n) => {
//     return n % 2 == 0;
// }
// let printMsg = (evenFunc, num) => {
// const isNumEven = evenFunc(num);
// console.log(`The number ${num} is an even number: ${isNumEven}.`)
// }
// // Pass in isEven as the callback function
// printMsg(isEven, 4); 
// // Prints: The number 4 is an even number: True.
 


// first class function & also called first class citizens

// function calculate(operation) {
//     switch (operation) {
//       case "ADD":
//         return function (a, b) {
//           console.log(`${a} + ${b} = ${a + b}`);
//         };
//       case "SUBTRACT":
//         return function (a, b) {
//           console.log(`${a} - ${b} = ${a - b}`);
//         };
//     }
// }
// const calculateAdd = calculate("ADD");
// calculateAdd(2, 3);
// const calculateSubtract = calculate("SUBTRACT");
// calculateSubtract(2, 3);


// const foo = function() {
//     console.log("foobar");
// }
// foo(); // Invoke it using the variable
// // foobar