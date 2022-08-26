// callback function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
// callback function
function callMe() {
    console.log('I am callback function');
}
// passing function as an argument
greet('Peter', callMe);



// Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}
// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}
// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);




function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
}
  
  function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
}
  
  function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
}
  
  function doOperation() {
    doStep1(0, result1 => {
      doStep2(result1, result2 => {
        doStep3(result2, result3 => {
          console.log(`result: ${result3}`);
        });
      });
    });
  
}
doOperation();
  


function getUser(id, callback) {
    setTimeout(() => {
      console.log("Reading an user from database...");
      callback({id: id, githubUsername: 'jerrycode06'});
    }, 2000);
  }
  
  getUser(1, (user) => {
    console.log("User", user);
// })
  


// callback hell.
const getRollNo = () => {
    setTimeout( () => {
        console.log("API gerring roll no");
        let roll_no=[1,2,3,4,5];
        console.log(roll_no);

        setTimeout( (roll_no) => {
            const biodata={
                name:"AARTI",
                age:23
            }
            console.log(`my roll no is ${roll_no}.my name is ${biodata.name} and i
            am ${biodata.age} years old`);

            setTimeout( (name) =>{
                biodata.gender="female";
                console.log(`my roll no is ${roll_no}.my name is ${biodata.name} and i
                am ${biodata.age} years old.i am alpha ${biodata.gender}`);

            },2000,biodata.name);

        },2000,roll_no[1]);

    },2000);
}

getRollNo();
