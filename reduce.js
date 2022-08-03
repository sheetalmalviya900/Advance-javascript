// sum of arr
// const arr=[5,1,3,2,6];
// const output=arr.reduce(function(acc,cuur){
//     acc+=cuur;
//     return acc;
// },0);
// console.log(output);


// // max of arr
// const arr=[5,1,3,2,6];
// const output=arr.reduce(function(max,cuur){
//     if(cuur>max){
//         max=cuur
//     }
//     return max;
// },0)
// console.log(output);


// const users=[
//     {firstname:"aarti",lastname:"kumari",age:"23"},
//     {firstname:"sheetal",lastname:"malviya",age:"19"},
//     {firstname:"sonu",lastname:"kumar",age:"19"},
// ]
// const output=users.reduce(function(acc,cuur){
//     if(acc[cuur.age]){
//         acc[cuur.age]=++acc[cuur.age];
//     }
//     else{
//         acc[cuur.age]=1;
//     }
//     return acc;
// },{})
// console.log(output);


// const users=[
//     {firstname:"aarti",lastname:"kumari",age:"23"},
//     {firstname:"sheetal",lastname:"malviya",age:"19"},
//     {firstname:"sonu",lastname:"kumar",age:"31"},
// ]
// const output = users.reduce((acc, curr) => {
//     if (curr.age < 30) {
//       acc.push(curr.firstname);
//     }
//     return acc;
//   }, []);
//   console.log(output);


// const message = ["JavaScript ", "is ", "fun."];
// // function to join each string elements
// function joinStrings(accumulator, currentValue) {
//   return accumulator + currentValue;
// }
// // reduce join each element of the string
// let joinedString = message.reduce(joinStrings);
// console.log(joinedString);
// // Output: JavaScript is fun.


// const numbers = [1, 2, 3, 4, 5, 6];
// function sum_reducer(accumulator, currentValue) {
//   return accumulator + currentValue;
// }
// let sum = numbers.reduce(sum_reducer);
// console.log(sum); // 21
// // using arrow function
// let summation = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(summation); // 21


// const numbers = [1800, 50, 300, 20, 100];
// // subtract all numbers from first number
// // since 1st element is called as accumulator rather than currentValue
// // 1800 - 50 - 300 - 20 - 100
// let difference = numbers.reduce(
//   (accumulator, currentValue) => accumulator - currentValue
// );
// console.log(difference); // 1330


// const expenses = [1800, 2000, 3000, 5000, 500];
// const salary = 15000;
// // function that subtracts all array elements from given number
// // 15000 - 1800 - 2000 - 3000 - 5000 - 500
// let remaining = expenses.reduce(
//   (accumulator, currentValue) => accumulator - currentValue,
//   salary
// );
// console.log(remaining); // 2700


// let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
// let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
//   if (accumulator.indexOf(currentValue) === -1) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }, []);
// console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]


let people = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
];
function groupBy(objectArray, property) {
    return objectArray.reduce(function (accumulator, currentObject) {
      let key = currentObject[property];
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      accumulator[key].push(currentObject);
      return accumulator;
    }, {});
}
let groupedPeople = groupBy(people, "age");
console.log(groupedPeople);


// // remove duplicate from list
// const list=[6,1,3,5,6,3,1]
// const output=list.reduce(function(acc,curr){
//     if(!acc.includes(curr)){
//         acc.push(curr)
//     }
//     return acc
// },[])
// const p=output.reduce((acc,curr)=>acc*curr)
// console.log(p)