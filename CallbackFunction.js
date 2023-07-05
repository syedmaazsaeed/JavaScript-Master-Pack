// Variable passed as a parameter
// In one Function passes then another function as a parameter 



function add(num1,num2,callback) {
    console.log(num1+num2);
     callback();
}
add(20,45,Hy);


function Hy(){
    console.log("Welcome!!");
}

// A callback function is the function passed into another function as arguments.
// which is then invoked inside the outer function to complete an action 
// action complete function execute ...


function modulus(i,j,callback) {
    let result=i%j;
    callback(result);

}
function displayresult(result) {
    console.log(result);
}
modulus(2,20,displayresult);


//  




