// A loop is defined as the set of instuction can repeated multiple times
// In js there are three main types of loops

// 1. for loop
// 2. while loop
// 3. do while loop

// Another its not a type
// for each loop

// 1. for loop
// for (let i = 0; i <= 16; i += 2) {
// if(i%2===0)
//   console.log("*", i);

//   statement
// }

// 2. while loop
// In while loop we defined outside the variable

// let j = 12;
// while (j < 15) {
//     if(j===13){
//       console.log("**", j);
//         break;
//     }

//     j++}
// Break Statement Terminate the loop / move outside the loop
// continue statement is used to skip the current iteration wihin the loop and proceed to the next iteration of

// let k=0;
// do{
//   if(k===2)
//   {
//     k++;
//     continue;
//   }
//   console.log(k);
//   k++;
// }while(k<=15);

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// 3. do while loop
// do run atleast one time if the statement is wrong also run

// let i = 19;
// do {
//   console.log("This is the do while loop");
//   i++;
// } while (i <= 23);

// ForEach Loop in JS : the basic function of foreach loop specified operation for each element

// let numbers = [1, 4, 2, 7, 56, 7, 8, 32];
// numbers.forEach(function (element) {
//   console.log(element);
// });

// let cars=['civic' , 'city' , 'V8']
// cars.forEach(function (elements,index,arrays){
//   console.log(elements);
//   console.log(index);
//   console.log(arrays);
// });

//  without foreach loop the method is difficult are as follows :

// Discuss

// let password;
// do {
//   password = prompt('Enter the passcode, please');
// } while (password !== 'web');
