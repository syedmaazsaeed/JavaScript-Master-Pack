// Async function always return Promise 
// Async function release js es 2017 Version
// Asynchronous mode means work background
// If we apply any function before async word then the function is promise
// In async function they do not write resolve or reject different..


//  async function data()  {

//     return "Collect and manage the data";
// }
// console.log(data());
// 1st method 
//  async function collectdata()  {

//     return "Collect and manage the data";
// }
// collectdata().then((result) =>{
//  console.log(result);
// });




// 2nd method 
// let testd = async function collectdata()  {

//     return "Collect and manage the data";
// }
// collectdata().then((result) =>{
//  console.log(result);
// });


// async function maaz() {
//     return ("Hello!!!!!");
// }
//  maaz().then((result)=>{

//     console.log(result);
//  })





// Async Await 
// any function makes async and promise await ..
// "Using the async keyword makes a function asynchronous, 
// nd using the await keyword allows you to wait for the resolution of a Promise.

// async function say() {

// let Germanyweather=new Promise(function(resolve,reject)  {
//     setTimeout(()=>{
//       resolve( '"-1 Degree hello its too cold'); 
//     },2000)
//   })
//   Germanyweather.then((message)=> {
//     console.log(message);
//   });

// }
// say();


// async function showMessage() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve("Hello, world!");
//       }, 2000);
//     });
//   }
  
//   showMessage().then(message => {
//     console.log(message);
//   });

  
//   async: The async keyword is used to declare 
//   a function as asynchronous. It allows the 
//   function to use await inside it and
//    indicates that the function will always return a promise.

// await: The await keyword is used inside an
//  async function to pause the execution of
//   the function until a promise is resolved.
//    It can only be used within async functions.
//     When encountering an await expression, 
//     the function waits for the promise to
//      be resolved before moving forward. 
// It makes the asynchronous code appear
//  more synchronous and easier to read and write.


function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 4000);
    });
  }
  
  async function getData() {
    const data = await fetchData(); // Wait for the promise to be resolved
    console.log(data);
  }
  
  getData();
  
//   async makes a function return a Promise

// await makes a function wait for a Promise
// The await keyword can only be used inside an async function.

// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

// let value = await promise;



// Asynchronous Action are the actions that we initaite now and they finish later. 
// Example  : Set timeOut

// Synchronous action are the action that initiate and finish one by one .
// Synchronous actions in JavaScript are executed in a sequential manner, where each operation must complete before the next one starts. In other words, the program execution 
// blocks or waits for each operation
//  to finish before proceeding to the next one. 
// console.log('First');
// console.log('Second');
// console.log('Third');

// Asynchronous Actions:
// Asynchronous actions in JavaScript 
// re non-blocking and allow multiple 
// operations to be initiated without
//  waiting for each one to complete.
//   These actions are typically used
//    for tasks that may take some time 
//    to finish, such as network requests,
//     file operations, or animations. 
//     Instead of waiting for the
//      completion of an asynchronous 
//      task, JavaScript 
// proceeds with executing the next 
// line of code immediately after initiating the task

// console.log('First');

// setTimeout(function() {
//   console.log('Third');
// }, 2000);
// these line through background . code does not stop . 

// console.log('Second');

// First
// Second
// Third (after a 2-second delay)

