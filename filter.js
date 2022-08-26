const arr=[5,1,2,0,6];
function isodd(x){
    return x%2;
}
const output=arr.filter(isodd)
console.log(output);


const arr=[5,1,2,0,6];
function iseven(x){
    return x%2===0;
}
const output=arr.filter(iseven)
console.log(output);


const arr=[5,1,2,0,6];
const output=arr.filter((x)=> x>4);
console.log(output);


const users=[
    {firstname:"aarti",lastname:"kumari",age:"23"},
    {firstname:"sheetal",lastname:"malviya",age:"19"},
    {firstname:"sonu",lastname:"kumar",age:"31"},
]
const output=users.filter(x=>x.age<30).map((x)=>x.firstname)
console.log(output);


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function to check even numbers
function checkEven(number) {2
  if (number % 2 == 0)
    return true;
  else
    return false;
}
// create a new array by filter even numbers from the numbers array
let evenNumbers = numbers.filter(checkEven);
console.log(evenNumbers);
// Output: [ 2, 4, 6, 8, 10 ]


const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000]
function checkPrice(element) {
  return element > 2000 && !Number.isNaN(element);
}
let filteredPrices = prices.filter(checkPrice);
console.log(filteredPrices); // [ 3000, 5000, 8000 ]
// using arrow function
let newPrices = prices.filter((price) => (price > 2000 && !Number.isNaN(price)));
console.log(newPrices); // [ 3000, 5000, 8000 ]

const arr=[2,10,20,5,8,50,4]
const output=arr.filter((x) => x > 5).filter((x) => x % 2 === 0);
console.log(output);7
