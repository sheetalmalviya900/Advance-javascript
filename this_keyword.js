//this with alone 
let x=this
console.log(x);


//this with function
function pinky(){
    console.log(this)
}
pinky()

//this with strict use with function
"use strict"
function pinky(){
    console.log(this)
}
pinky()


//this with strict alone
"use strict"
let x=this
console.log(x)

// this with object function 
var object={
    Name:"Sheetal",
    fullname:"malviya",
    id:function (){
        console.log(this.Name)
    }
}
object.id()


const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
console.log(person.fullName())


// Question 1: Variable vs property
// What logs to console the following code snippet:
const object = {
  message: 'Hello, World!',
  getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
  }
};
console.log(object.getMessage()); // What is logged?


// Question 2: Cat name
// What logs to console the following code snippet:
function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}
const cat = new Pet('Fluffy');
console.log(cat.getName()); // What is logged?
const { getName } = cat;
console.log(getName());     // What is logged?



// Question 3: Delayed greeting
// What logs to console the following code snippet:
const object = {
  message: 'Hello, World!',
  logMessage() {
    console.log(this.message); // What is logged?
  }
};
setTimeout(object.logMessage, 1000);



// Question 4: Artificial method
// How can you call logMessage function so that it logs "Hello, World!"?
const object = {
  message: 'Hello, World!'
};
function logMessage() {
  console.log(this.message); // "Hello, World!"
}


// Question 5: Greeting and farewell
// What logs to console the following code snippet:
const object = {
  who: 'World',
  greet() {
    return `Hello, ${this.who}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.who}!`;
  }
};
console.log(object.greet());    // What is logged?
console.log(object.farewell()); // What is logged?


// Question 6: Tricky length
// What logs to console the following code snippet:
var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method(callback) {
    callback();
  }
};
object.method(callback, 1, 2);


// Question 7: Calling arguments
// What logs to console the following code snippet:
var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method() {
    arguments[0]();
  }
};
object.method(callback, 1, 2);


