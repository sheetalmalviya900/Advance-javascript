const name = 'AARTI';
console.log(`Hello ${name}!`); // Hello AARTI!


Template Literals for Strings

const str1 = `This is a string`;
const str2 = `This is a string with a 'quote' in it`;
const str3 = `This is a string with a "double quote" in it`;
console.log(str1);
console.log(str2);
console.log(str3);


// Multiline Strings Using Template Literals

const message1 = `This is a long message
that spans across multiple lines
in the code.`
console.log(message1)


// Expression Interpolation

const name = 'Jack';
console.log(`Hello ${name}`); 
const result = 4 + 5;
// template literals used with expressions
console.log(`The sum of 4 + 5 is ${result}`);
console.log(`${result < 10 ? 'Too low': 'Very high'}`)


// Tagged Templates

function tagExample(strings) {
    return strings;
}
// creating tagged template
const result = tagExample`Hello Jack`;
console.log(result);


const name = 'Jack';
const greet = true;
function tagExample(strings, nameValue) {
    let str0 = strings[0]; // Hello
    let str1 = strings[1]; // , How are you?
    if(greet) {
        return `${str0}${nameValue}${str1}`;
    }
}
// creating tagged literal
// passing argument name
const result = tagExample`Hello ${name}, How are you?`;
console.log(result);


let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."


let person = 'Mike';
let age = 28;
function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "
  let str2 = strings[2]; // "."

  let ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }
// We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}
let output = myTag`That ${ person } is a ${ age }.`;
console.log(output);
// // That Mike is a youngster.
