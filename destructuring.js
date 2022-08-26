// assigning object attributes to variables
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}


// destructuring assignment
let { name, age, gender } = person;
console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female

let { age, gender, name } = person;
console.log(name); // Sara

let {name1, age, gender} = person;
console.log(name1); // undefined

//destructuring assignment
// using different variable names
let { name: name1, age: age1, gender:gender1 } = person;
console.log(name1); // Sara
console.log(age1); // 25
console.log(gender1); // female




// Array Destructuring
// You can also perform array destructuring in a similar way. For example,
const arrValue = ['one', 'two', 'three'];
destructuring assignment in arrays
const [x, y, z] = arrValue;
console.log(x); // one
console.log(y); // two
console.log(z); // three

let arrValue = [10];
// assigning default value 5 and 7
let [x = 5,  y = 7] = arrValue;
console.log(x); // 10
console.log(y); // 7


const person = {
    name: 'Jack',
}
// assign default value 26 to age if undefined
const { name, age = 26} = person;
console.log(name); // Jack
console.log(age); // 26


// program to swap variables
let x = 4;
let y = 7;
// swapping variables
[x, y] = [y, x];
console.log(x); // 7
console.log(y); // 4


const arrValue = ['one', 'two', 'three'];
// destructuring assignment in arrays
const [x, , z] = arrValue;
console.log(x); // one
console.log(z); // three


const arrValue = ['one', 'two', 'three', 'four'];
// destructuring assignment in arrays
// assigning remaining elements to y
const [x, ...y] = arrValue;
console.log(x); // one
console.log(y); // ["two", "three", "four"]

const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}
// destructuring assignment
// assigning remaining properties to rest
let { name, ...rest } = person;
console.log(name); // Sara
console.log(rest); // {age: 25, gender: "female"}


const arrValue = ['one', 'two', 'three', 'four'];
// throws an error
const [ ...x, y] = arrValue;
console.log(x); // eror


// nested array elements
const arrValue = ['one', ['two', 'three']];
// nested destructuring assignment in arrays
const [x, [y, z]] = arrValue;
console.log(x); // one
console.log(y); // two
console.log(z); // three

const person = {
    name: 'Jack',
    age: 26,
    hobbies: {
        read: true,
        playGame: true
    }
}
// nested destructuring 
const {name, hobbies: {read, playGame}} = person;
console.log(name); // Jack
console.log(read); // true
console.log(playGame); // true
let{name,age,hobbies}= person;
console.log(hobbies["read"])
console.log(hobbies.playGame)


var [firstName,,...lastName] = ["alpha", "beta", "gamma", "delta"];      
console.log(firstName);//"alpha"
console.log(lastName);//"gamma, delta"

function NamesList() {
    return ["alpha", "beta", "gamma", "delta"]
}
var[firstName, secondName] = NamesList();
console.log(firstName);//"alpha"
console.log(secondName);//"beta"

let obj = {
	name: "GFG",
	add : {
		country: "India",
		state : {
			code : "JS",
			pincode:"820800",
			article:{
			topic : "destructuring"
			}
		}
	}
}

let {name} = obj;
console.log(name)

let {add:{country:abcd}} = obj
console.log(abcd)

let {add:{state:{code:cd}}} = obj
console.log(cd)

let {add:{state:{article:{topic:ef}}}} = obj
console.log(ef);



