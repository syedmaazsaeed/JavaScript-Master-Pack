const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  // In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// this is the keyword and used in objects ...



let person1={
    first_name:'Maaz',
    last_name:'Saeed',
    sayMaaz () {
        console.log("i have a  "+ car.brand +"  car")
    }
}

let car={
    brand:'civic',
    model:'A102'

}
person1.sayMaaz();

// this refers to the context or the current object that is executing the code.
// In the global scope, this refers to the global object
    //  (window in a browser environment,
    //  Global in Node.js).
// Inside an object method, this refers to the object itself.