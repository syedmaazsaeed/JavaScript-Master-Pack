// Promise is promise of code of execution.Promise is resolve or reject.
// The Code either execute or fails in both the cases the subscriber   will be notified 
// promises is basically parallel execution
// Example : Fetch google.com  homepage
// fetech data from the data API
// fetech picture from the server
// print downloading
// rest of the script 
// all things run parallel 
// when you handover your own suits to the tailor . you will 
// not be wait if the tailor set you suits then you
//  go no you can move and start next work
// There are two properties in promise one is state and 2nd is result
// how parallel execution work .then .catch methods...

//1.  state: Initially pending,  then changes to either "fulfilled" when resolve is called 
//  or "rejected" when reject is called 

// 2. Result : Initially undefined then changes to value if resolved(value) or error
//  when rejected(error) 


// Syntax of promise :

// let promise = new Promise(function (resolve, reject) { 
//                    }


//   console.log("hello");
// setTimeout(function () {
//     console.log("hello in 3 seconds");
// }, 3000);

//   console.log("My name is " + "Maaz");


// promise is the new features in ES6 
// Example : You and You friend are on the call and your friend says that it has 
// been  quite many days since we met . you say that we are metting tomorrow. you can 
// promise your friend  

// Promise is divide into three stages 1. pending(your promise will be pending till tomorrow and not be mention any time )  
// 2. fulfilled(If you met up then promise is fulfilled)
//  3. rejected (If you not be met up promise is rejected)..
// in js  condition is fulfilled(resolved) use then ...
//   and failed(rejected) use catch both are callback function 

//   let promise =new Promise(function(resolve,reject){
  
//      resolve(54);
//   })
//   console.log(promise); 

// prom is the varibale and prom is the object of promise 

  
  // If promise is satisfy  you can call  resolve and if your promise not satisfy
  // you can reject  
  // in promise when you are using resolve and reject then and catch are automatically call
//   because both are callback function 

  // let prom= new Promise(function(resolve,reject){
  // let condition=true;
  //  if(condition){
  // resolve("Here is a Success")
  //  }
  //  else {
  // reject("Here is a Failure")
  //  }
  // } );
  // console.log(prom);


  // let promise= new Promise(function(resolve,reject){
  //   let condition=false;
  //    if(condition){
  //   resolve("Here is a Success")
  //    }
  //    else {
  //   reject("Here is a Failure")
  //    }
  //   } );

    // promise refers to a variable that holds a Promise object. The promise variable 
    // is expected to be previously assigned a Promise object through the code.
    // promise
    // .then(function(output) {
    //   console.log("Resolved",output)
    // })
    // .catch(function(error) {
    //   console.log("Rejected",error)
    // })
    

  //   function prom() {
  //     return new Promise(function(resolve, reject) {
  //       if(complete){
  //         resolve("Successful");
  //       }
  //       else {
  //         reject("Failure");
  //       }
  //   });
  // }
  // console.log(prom(false));



function checknumber(number) {
  return new Promise(function(resolve,reject) {
    if(typeof number ==='number') {
      resolve("The Number is valid");
    }
    else {
      reject("The Number is invalid");
    }
  });
}
checknumber(65)
.then(function(result) {
  console.log(result);

})
.catch(function(error){
  console.log(error);
});

// When the Promise is fulfilled, the .then 
//  method is called, and you can do something with the data. If the Promise 
// is rejected, the .catch method is called, and you can handle the error.


// Promises have three states:

// Pending: The initial state. The promise is
// still being processed and has not been fulfilled or rejected yet.
// Fulfilled: The promise has been 
//successfully fulfilled with a value.
// Rejected: The promise has
// encountered an error or failure
// and has been rejected with a reason or error message.
// You can attach callbacks to 
//a promise using .then() to handle
// the resolved state and .catch() to handle
// the rejected state. These callbacks are executed when the promise
//  settles, allowing you to perform further actions or handle errors.

// promise ka mtlb hota ha ka abhi ma data la kar araha hon tabh tak ka lei intizar karo
// jasey hi ajaye ga resolve kar don ga .


let Germanyweather=new Promise(function(resolve,reject) {
  setTimeout(()=>{
    console.log("-1 Degree")
  },1000)
});


