// var obj = { num: 2 };
// function add(a, b){
//   return this.num + a + b;
// }
// console.log(add.call(obj, 3, 5));


// var obj = { num: 2 };
// function add(a, b){
//   return this.num + a + b;
// }
// console.log(add.apply(obj, [3, 5]));


// var obj = { num: 2 };
// function add(a, b){
//   return this.num + a + b;
// }
// const func = add.bind(obj, 3, 5);
// func(); // Returns 10



// var obj = { num: 2 };
// function add(a, b){
//   return this.num + a + b;
// }
// const resultCall  = add.call(obj, 3, 5);
// const resultApply = add.apply(obj, [3, 5]);
// const funcBind    = add.bind(obj, 3, 5)
// const resultBind  = funcBind();
// console.log(resultCall, resultApply, resultBind);



// var obj = {
//     x: 81,
//     getX: function() {
//       return this.x;
//     }
// };
// console.log(obj.getX.bind(obj)());
// console.log(obj.getX.call(obj));
// console.log(obj.getX.apply(obj));
  


// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };
// var pokemonName = function() {
//     console.log(this.getPokeName() + 'I choose you!');
// };
// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
// logPokemon(); // 'Pika Chu I choose you!'



// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };
// var pokemonName = function(snack, hobby) {
//     console.log(this.getPokeName() + 'I choose you!');
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };
// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
// logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms



// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };
// var pokemonName = function(snack, hobby) {
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };
// pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
// pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms



// const queue = [
//     { name: 'Matt' },
//     { name: 'Jack' }
// ];
// for (let i = 0; i < queue.length; i++) {
//     (function(i) {
//       this.displayInfo = function() {
//         console.log(`Position ${i+1}: ${this.name}`);
//       }
//       this.displayInfo();
//     }).call(queue[i], i);
// }



// const numbers = [1, 2, 3];
// const moreNumbers = [4, 5, 6];
// numbers.push.apply(numbers, moreNumbers);
// console.log(numbers);



// const john = {
//     name: 'John',
//     age: 24,
// };
// const jane = {
//     name: 'Jane',
//     age: 22,
// };
// function greeting() {
//   console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
// }
// const greetingJohn = greeting.bind(john);
// // Hi, I am John and I am 24 years old
// greetingJohn();
// const greetingJane = greeting.bind(jane);
// // Hi, I am Jane and I am 22 years old
// greetingJane();


// function greeting(lang) {
//     console.log(`${lang}: I am ${this.name}`);
// }
//   const john = {
//     name: 'John'
// };
//   const jane = {
//     name: 'Jane'
// };
//   const greetingJohn = greeting.bind(john, 'en');
//   greetingJohn();
//   const greetingJane = greeting.bind(jane, 'es');
//   greetingJane();


// function greeting() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   }
//   const john = {
//     name: 'John',
//     age: 24,
//   };
//   const jane = {
//     name: 'Jane',
//     age: 22,
//   };
//   // Hi, I am John and I am 24 years old
//   greeting.call(john);
//   // Hi, I am Jane and I am 22 years old
//   greeting.call(jane);


// function greet(greeting) {
//   console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
// }
// const john = {
//   name: 'John',
//   age: 24,
// };
// const jane = {
//   name: 'Jane',
//   age: 22,
// };
// // Hi, I am John and I am 24 years old
// greet.call(john, 'Hi');
// // Hi, I am Jane and I am 22 years old
// greet.call(jane, 'Hello');


// function greet(greeting, lang) {
//   console.log(lang);
//   console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
// }
// const john = {
//   name: 'John',
//   age: 24,
// };
// const jane = {
//   name: 'Jane',
//   age: 22,
// };
// // Hi, I am John and I am 24 years old
// greet.apply(john, ['Hi', 'en']);
// // Hi, I am Jane and I am 22 years old
// greet.apply(jane, ['Hola', 'es']);


// let name={
//     firstname: "sheetal",
//     lastname:"malviya",
// }
// let name1={
//     firstname:"aarti",
//     lastname:"kumari",
// }

// let printfullname=function(hometown,state){
//     console.log(this.firstname+" "+this.lastname +'frome'+hometown+"..."+state)
// }

// printfullname.call(name1,"duwarka","delhi");
// printfullname.call(name,"berchha","madhyapradesh")

// printfullname.apply(name1,["duwarka","delhi"])
// printfullname.apply(name,["berchha","madhyapradesh"])

// printmyname=printfullname.bind(name1,"duwarka","delhi");
// printmyname()
// printsheetalname=printfullname.bind(name,"berchha","madhyapradesh")
// printsheetalname()