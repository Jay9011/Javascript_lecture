// added in ES 5
// "use strict";

// 1. Variable
// let (added in ES6)
let _globalName = 'global Scope';
// block scope
{
    let name = 'Jay';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(_globalName);
}
console.log(name);
console.log(_globalName);

// ※ var (don't ever user this!)
// var hoisting (move declaration from bottom to top)
console.log(age);
age = 4;
console.log(age);

function varTest() {
    console.log(age);
}
// has no block scope
{
    var age;
}
console.log(age);
varTest();

// 2. Constants
// favor immutable data type always for  few reasons
// - security
// - thread safery
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 3. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function (변수에 할당 가능한 함수)
const count = 17; // integer
const size = 17.1; // deccimal number
console.log(count);
console.log(size);
// number => special numeric values
// infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'Not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
// BigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const greeting = 'hello ' + char;
const helloBob = `hi ${greeting}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, Nan, ''
// true : any other value
let test = undefined ? 'true' : 'false';
console.log(test);

// null
let nothing = null;
console.log(`vlaue: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
console.log(`value : ${symbol1.description}, type: ${typeof symbol1}`);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value : ${gSymbol1.description}, type: ${typeof gSymbol1}`);

// 4. object, real-life object, data structure
const ellie = {
    name: 'ellie',
    age: 20
}
console.log(`She name is ${ellie.name} and age is ${ellie.age}`);
ellie.age = 25; // The object is constants, but can put-in a value to the object's key.
console.log(`She name is ${ellie.name} and age is ${ellie.age}`);

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value : ${text}, type: ${typeof text}`);
text = 1;
console.log(`value : ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text}, type: ${typeof text}`);
text = '8' / '2'
console.log(`value : ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // error Dynamic typing