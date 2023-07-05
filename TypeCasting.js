// Type Casting is the process of converting one data type into another data type 
// JS is a dynamically typed language which means that variable can hold values of any 
// data type and the type of variable can change during runtime
// converting one variable converts to other .

// Type conversion and type coercion

let var1=87;
console.log(var1);



let var2=93;
console.log(var2,typeof(var2));



let var3=String(93);
console.log(var3,typeof(var3));

// converting integer to string..



let bool=true;
console.log(bool,typeof(bool));

let bool2=String(true);
console.log(bool2,typeof(bool2));



let date= new Date();

console.log(date,typeof(date));

let date1= String(new Date());

console.log(date1,typeof(date1));



let arr=[3,28,78,9,98,77,33,43,22];
console.log(arr, typeof(arr));


// count all elements and comma .
let arr1=String([3,28,78,9,98,77,33,43,22]);
console.log(arr1.length, typeof(arr1));



let arr2=[3,28,78,9,98,77,33,43,22];
console.log(arr2.length, typeof(arr2));
// count only elements


 

let i=89;
console.log(i.toString());

let boolean=89;
console.log(boolean.toString());


let j=89;
console.log(j);


let string=Number('2343');
console.log(string,typeof(string));


let string1=Number('23sd243');
console.log(string1,typeof(string1));

let string2=Number(true);
console.log(string2,typeof(string2));

let string3=Number([2,4,5,6,65,43,67,8]);
console.log(string3,typeof(string3));



// 1. String()
// 2. Number()
// 3.parseINT()
// 4.parseFloat()


var number= parseInt('65');
console.log(number,typeof(number));

var numbers1= parseInt('65.099');
console.log(numbers1,typeof(numbers1));

var number2= parseFloat('65.099');
console.log(number2,typeof(number2));

// decimal number place according to your need.
var number3= parseFloat('65.099');
console.log(number3.toFixed(3),typeof(number3));

// Type Casting 
let mystr='879';
let mynum=34;
console.log(mystr +mynum);




    // Converting Strings to Numbers
    // Converting Numbers to Strings
    // Converting Dates to Numbers
    // Converting Numbers to Dates
    // Converting Booleans to Numbers
    // Converting Numbers to Booleans