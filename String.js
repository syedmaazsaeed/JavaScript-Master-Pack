// let names_list=["John"];
// const uppercasestring= names_list.toUpperCase();
// console.log(uppercasestring);

// let n_list=["John" , "Henna" , "Barry"];
// const lowercasestring= n_list.toUpperCase();
// const lowercasestring= n_list.map(function(name){
//     return name.to
// });
// console.log(lowercasestring.n_list);

// What is String ?
// String is the built in object that represent the sequence of characters.
// it is used to work with textual data and manipulate strings
// Strings can be created in JavaScript using either single
//  quotes ('), double quotes ("), or backticks (`)

// Strings in JavaScript are immutable, which means they cannot
//   be changed once created.

// A string in JavaScript is a sequence of characters enclosed in single quotes ('),
//  double quotes ("), or backticks (`). It represents textual data and allows
//   you to work with and manipulate strings of characters. Strings can contain
//   letters, numbers, symbols, and whitespace. They can be of any length,
//    from a single character to a long sequence of characters. Strings are
//    immutable, meaning they cannot be changed once created. However, you
//     can perform operations on strings such as concatenation, extracting
//      substrings, converting case, searching
//  for specific characters or substrings, and replacing parts of a string

// JS String Methods

// 1.     length (property)
// 2.     indexof()
// 3.     concat()
// 4.    toLowercase()
// 5.     lastindexof()
// 6.    split()
// 7.    touppercase()
// 8.    replace()
// 9.    repeat()
// 10.    includes()
// 11.    trim()
// 12.    slice()
// 13.    startswith()
// 14.    charAt()
// 15.    substr()
// 16.    endswith()
// 17.    charCodeAt()
// 18.    substring()
// 19.    search()
// 21.    toString()
// 22.    match()

let str =
  "Javascript is the most powerful language that is used to change the web pages dynamically";
let a = str.length;
console.log(a);

var std = "Node JS IS THE RUN TiMe EnvIrONMent";
var b = std.toLowerCase();
console.log(b);

var std = "the quick brown fox jumos over the lazy dog";
var x = std.toUpperCase();
console.log(x);

// includes() is used to search the In JavaScript, the includes()
// method is a string method that checks if a given substring
//  exists within a string. It returns
//  a boolean value indicating whether the substring is found or not.

// includes function is the case sensitive function

var std = "the quick brown fox jumos over the lazy dog";
var x = std.includes("brown");
console.log(x);

//  It is Also case Sensitive function

var std1 = "the quick brown fox jumos over the lazy dog";
var y = std1.startsWith("the");
console.log(y);

var std2 = "the quick brown fox jumos over the lazy dog";
var z = std2.endsWith("og");
console.log(z);

// search()
// search return position value not retuen noolean
// it return -1 value if not found the value / wrong value no match

var std3 = " black hat hacker community";
var i = std3.search("hacker");
console.log(i);

// matchMedia()
//   search just return position and match make the array same word search

var std4 =
  "The Database Managaement system is used to store and manage The data ";
var j = std4.match(/The /g);
console.log(j);

var course = "React Native Applications is used to build Mobile Application ";
var k = course.indexOf("Application");
console.log(k);

//   search first to end

var course = "React Native Applications is used to build Mobile Application ";
var s = course.lastIndexOf("Application");
console.log(s);

var q = "JS IS FAMOUS LANGUAGE";
var h = q.replace("JS", "PHP");
console.log(h);

var string =
  "The Python programming language is widely used, and so is the JavaScript programming language.";
var e = string.replace(/ is/g, " are ");
console.log(e);

// used regular expressions g means globally sarch

// trim()  it is mostly used form input when user add any space
// any words remove extra spaces either left or right

// The trim() method in JavaScript is used to remove whitespace
//  (spaces, tabs, and newlines) from both the beginning and the
//   end of a string. It does not
//  modify the original string but returns a new string
//   with the leading and trailing whitespace removed.

var v = "        Mojo";
console.log(v);

var w = "        Mojo";
var f = w.trim();
console.log(f);

var t = "Mojo Programming Language";
var b1 = t.charAt(0);
console.log(b1);

// Discuss add spaces without cncat ""
let string1 = "Flutter";
let string2 = " Is used to build Mobile Applications";
let result = string1.concat(string2);
console.log(result);

// split() is used to pieces every word and convert it int0 the array
// In JavaScript, the split() method is used to split a
// string into an array of substrings based on a specified
//  delimiter. The original string remains unchanged, and
//   a new array is returned.

let numbers = "1,2,4,5,7,4,33,55,54,1000";
let numberArray = numbers.split("");
console.log(numberArray);

let numbers1 = "1,2,4,5,7,4,33,55,54,1000";
let numberArray1 = numbers1.split("5");
console.log(numberArray1);

// the repeat() method is used to create a new string by repeating an existing string a specified
//  number of times. The original string remains unchanged, and the repeated string is returned

let str12 = "***";
let repeatedStr1 = str12.repeat(8);

console.log(repeatedStr1);

// slice()

// `slice()` is a string method in JavaScript used to extract a portion
//  of a string and create a new string containing the extracted part.
//   It takes two parameters: the starting index (inclusive) and the
//    ending index (exclusive) of the substring to be extracted.
//     The original string is not modified. Negative indices
//     can be used to count from the end of the
//  string. If the ending index is not specified, the extraction
//   continues to the end of the string.

let strs = "unity Gaming, Search Engine!";
let extractedStr = strs.slice(7, 12);

console.log(extractedStr);

let strn = "unity Gaming, Search Engine!";
let extractedStrn = strn.slice(-15);

console.log(extractedStrn);

//  substr() is a string method in JavaScript used to
// extract a substring from a string, starting from
//  a specified index and optionally extracting a
//   specified number of characters. It returns
//    the extracted substring as
//    a new string without modifying the original string.
//
// string.substr(startIndex, length)

let string1st = "JavaScript is awesome";
let extractedStr1st = string1st.substr(-7, 3);

console.log(extractedStr1st); // Output: "ome"

//    The substring() method in JavaScript
// does not include blank spaces (whitespace characters) when extracting
// substrings. It only considers the characters within the specified range.

let phrase = "Machine Learning";
let extractedPhrase = phrase.substring(8, 11);

console.log(extractedPhrase);

// diccuss

let newnumber = 92;
let newstr = newnumber.toString();
console.log(newstr + 200);

// valueof() print asit is value
let strv = "WelCome To The  Software World";
let value = strv.valueOf();

console.log(value); // Output: "Hello, World!"
