// datatype coversion
// 1)number

// examples(1)
// let num = 123;
// console.log(num);
// console.log(typeof num);

// covert 123 into string

// let num1 = 123;
// let num2 = String(num1);
// console.log(num2);
// console.log(typeof num2);

// covert string "123" into number

// let num1 = "123";
// let num2 = Number(num1);
// console.log(num2);
// console.log(typeof num2);

// Special case of mix variable

// let string = "123xyz";
// let num1 = Number(string);
// console.log(num1);
// console.log(typeof num1);

// special case of null to number wda

// let a = null;
// let num = Number(a);
// console.log(num);
// console.log(typeof num);

// special case of boolean values

// let value = true/false;  output-->1/0
// let num = Number(value);
// console.log(num);
// console.log(typeof num);

let num = 1;
let value = Boolean(num);
console.log(value);
console.log(typeof value);