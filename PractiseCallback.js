
// function mydata() {
//     console.log("This is my Accounts details");
// }


// function officedata() {
//     console.log("This is Office Admin Pannel ");
// }


// function Addition(value1,value2)
//  {
//     mydata();
//     officedata();
//     console.log(value1 + value2)
// }

// let i=10;
// let j=49;
// Addition(i,j);



// Callback()

function mydata() {
    console.log("This is my Accounts details");
}


function officedata() {
    console.log("This is Office Admin Pannel ");
}


function Addition(val1,val2,callback)
 {

    console.log(val1 + val2)
    callback();
}

let y=10;
let z=49;
Addition(y,z, mydata);


Addition(23,30, officedata);

// ALSO USED ANONYMOUS FUNCTIONS
Addition(23,30, function() {
    console.log("Anonymous Function")

});


