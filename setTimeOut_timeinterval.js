// Display a Text Once After 3 Second
// program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}
setTimeout(greet, 3000);
console.log('This message is shown first');



// Program with setTimeout()
//  program that shows the delay in execution
function greet() {
    console.log('Hello world');
}
function sayName(name) {
    console.log('Hello' + ' ' + name);
}
// calling the function
setTimeout(greet, 2000);
sayName('John');



// The setTimeout() method returns the interval id. 
// program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}
let intervalId = setTimeout(greet, 3000);
console.log('Id: ' + intervalId);  



// Display Time Every 3 Second
// program to display time every 3 seconds
function showTime() {

    // return new date and time
    let dateTime= new Date();

    // returns the current local time
    let time = dateTime.toLocaleTimeString();

    console.log(time)

    // display the time after 3 seconds
     setTimeout(showTime, 1000);
}
// calling the function
showTime();



// Use clearTimeout() Method
// program to stop the setTimeout() method
let count = 0;
// function creation
function increaseCount(){

    // increasing the count by 1
    count += 1;
    console.log(count)
}
let id = setTimeout(increaseCount, 3000);
// clearTimeout
// increaseCount()
clearTimeout(id); 
console.log('setTimeout is stopped.');



// program to display a name
function greet(name, lastName) {
    console.log('Hello' + ' ' + name + ' ' + lastName);
}
// passing argument to setTimeout
setTimeout(greet, 1000, 'John', 'Doe');



// Display Time Every 5 Seconds
// program to display time every 5 seconds
function showTime() {

    // return new date and time
    let dateTime= new Date();

    // return the time
    let time = dateTime.toLocaleTimeString();

    console.log(time)
}
let display = setInterval(showTime, 5000);




// Use clearInterval() Method
// program to stop the setInterval() method after five times
let count = 0;
// function creation
let interval = setInterval(function(){

    // increasing the count by 1
    count += 1;

    // when count equals to 5, stop the function
    if(count === 5){
        clearInterval(interval);
    }

    // display the current time
    let dateTime= new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);

}, 2000);



// program to display a name
function greet(name, lastName) {
    console.log('Hello' + ' ' + name + ' ' + lastName);
}
// passing argument to setInterval
setInterval(greet, 1000, 'John', 'Doe');
