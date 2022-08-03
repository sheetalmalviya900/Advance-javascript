// const interviewQuestion=(name)=>{
//     return function(topic){
//         if(name==="AARTI"){
//             console.log(`hi,${name}.plz explain what is ${topic}.`);
//         }
//         else if(name==="SHEETAL"){
//             console.log(`hi,${name}.plz explain what is ${topic}.`);
//         }
//         else if(name==="SONU"){
//             console.log(`hi,${name}.plz explain what is ${topic}.`);
//         } 
//         else{
//             console.log("welcome to TCS company.");
//         }
//     }
// }
// interviewQuestion("AARTI")("ui");
// interviewQuestion("SHEETAL")("reactjs");
// interviewQuestion("SONU")("nodejs");



// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z=x();
// console.log(z);
// z();

// c=68
// function z(){
//     var b=900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b,c);
//         }
//         y();
//     }
//     x();
// }
// z();


// // javascript closure example
// // outer function
// function greet() {
//     // variable defined outside the inner function
//     let name = 'John';

//     // inner function
//     function displayName() { 
//     // accessing name variable
//         return 'Hi' + ' ' + name; 
//     }
//     return displayName;
// }
// const g1 = greet();
// console.log(g1); // returns the function definition
// console.log(g1()); // returns the value



// // closure example
// function calculate(x) {
//     function multiply(y) {
//         return x * y;
//     }
//     return multiply;
// }
// const multiply3 = calculate(3);
// const multiply4 = calculate(4);
// console.log(multiply3); // returns calculate function definition
// console.log(multiply3()); // NaN
// console.log(multiply3(6)); // 18
// console.log(multiply4(2)); // 8



// function sum() {
//     let a = 0;
//     function increaseSum() {

//         // the value of a is increased by 1
//         return a = a + 1;
//     }
//     return increaseSum;
// }
// // let a=5
// let x = sum();
// let a = 5;
// console.log(x()); // 1
// console.log(x()); // 2
// console.log(a); // 5



// function makeFunc() {
//     const name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
// }
// const myFunc = makeFunc();
// myFunc();
  


// // closure scope chain
// // global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }
// console.log(sum(1)(2)(3)(4)); // log 20



// Outer function
// function outer()
// {
// 	function create_Closure(val)
// 	{
// 		return function()
// 		{
// 			return val;
// 		}
// 	}
// 	var arr = [];
// 	var i;
// 	for (i = 0; i < 4; i++)
// 	{
// 		arr[i] = create_Closure(i);
// 	}
// 	return arr;
// }
// var get_arr = outer();
// console.log(get_arr[0]());
// console.log(get_arr[1]());
// console.log(get_arr[2]());
// console.log(get_arr[3]());