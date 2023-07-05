//  let arr=[2,4,56,86,74,2,32];
//  let element=arr.slice(1,3);  // mistaken augument
//  console.log(element);

// Two arguments passed by the slice method..

// let arr = [2, 4, 56, 86, 74, 2, 32];
// let element = arr.splice(4);
// console.log(element);

//  let arr = [2, 4, 56, 86, 74, 2, 32];
//  let element = arr.slice(4);
//  console.log(element);

// Slice function and Splice function in JavaScript.
// These are the Arrays Methods

// IN Slice function The Original Array does not change just extract the elements from original array.
// Example : Cake Slice
// syntax : slice(starting-index, ending-index)
// Every Array value stored and its own index..

// slice()

// var a=['ali','john','hellen','Saad' ,'Anas'];
// var b=a.slice(1,3);
// console.log(b);

// var c=['ali','john','hellen','Saad' ,'Anas'];
// var d=c.slice(1);
// console.log(d);

// var e = ["ali", "john", "hellen", "Saad", "Anas"];
// var f = e.slice(-3);
// console.log(f);

// var i = ["ali", "john", "hellen", "Saad", "Anas"];
// var j = i.slice(-3,-1);
// console.log(j);

// -3 to end ...

// splice() : The value that can be added in an Existing Array

// Syntax : splice(index, howmany delete,'new value')

// var a=['jack','Talal','Frank' , 'john'];
// a.splice(1,1,'Karan' , 'Henna');
// console.log(a)
// ;

// The Slice function is used to extract the portion of an array and return a new array
// containing the extracted elements.it does not modify the original array.

// The Splice Function is used to modify , an array by adding or removing , replacing
//  element within an array

//  array.splice(start, deleteCount, item1, item2, ...);

// let str = ["SE", "CS", "AI", "DS"];
// console.log(str);  


// let remove_element = str.splice(0, 2);
// console.log(remove_element);



// 1.  Splice Method is used to change the content of array by removing existing elements
// or adding new elements this method doses not change the original array.

// arrayname.splice(start,delete,replacevalues) 
// in start we write index number in an array .
// in delete element to delete the beginning with index start

// var dept=['ME','CE','AI','IS','IT'];
// dept.splice(2);
// console.log(dept);
// index two must be included .


var dept1=['ME','CE','AI','IS','IT'];
dept1.splice(0,1);
console.log(dept1);

// Output:   [ 'CE', 'AI', 'IS', 'IT' ]

var countries=['Germany','Austria','UK','Canada','Russia'];
countries.splice(2,1);
console.log(countries);

// The original countries array
//  contains the following elements:
//  ['Germany', 'Austria', 'UK', 'Canada', 'Russia'].

// The splice() method is called
//  on the countries array. The first
//  argument 2 specifies the starting index
//  from which the elements should be removed.
//  In this case, it refers to the index of 'UK'
//  in the array (since arrays are zero-based, the index of 'UK' is 2).

// The second argument 2 specifies the number 
// of elements to remove starting from
//  the specified index. So, 2 means two elements will be removed.

// As a result, the splice() method
//  removes 'UK' and 'Canada' from 
// the countries array, leaving ['Germany', 'Austria', 'Russia'].

// Finally, the console.log() statement
//  outputs the modified countries array, which is ['Germany', 'Austria', 'Russia'].


// output:  [ 'Germany', 'Austria', 'Russia' ]


