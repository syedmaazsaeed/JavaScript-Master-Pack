let MyObject= {
    a: 1,
    b: "JS",
    c: [1,2,3],
    d:['NodeJs','NextJs' , 'ExpressJs']
};
console.log("MyObject" , MyObject);



// Object is basically  the collection of key values pairs
// keys  and values are  the most important propertites of Object

// objects is same as  the variable but the object contain many values

// Object same work as Array it is the Advance version of Arrays but the major difference 
// is that square brackets used in arrays and curly braces used in objects
// array value stored as index but  in object every index has a name Example: Name,Age etc
// in object also stored  arrays Eg ['hacker,'black-hat,'dark-web'];
// In Objects also create Multiple Function names as Method


// 1st Method of Creating Object in JavaScript

const Person={
    Name:'syed Maaz',
// Name is property and Syed Maaz is value 

    Age: 19,
    Field: 'Front End Web Developer',
    Address: 'Germany Berlin ',
    Goal:'Full Stack Web Developer'
};
// console.log(Person);
// console.log("Person : " , Person.Goal);
console.log("Person.Name :",Person.Name );
console.log("Person.Field :", Person.Field);
console.log("Person.Goal :", Person.Goal);


var a= {
    fname:'Dark',
    lname:'web',
    email:'darkweb@gmail.com',
    phone_No:['+91','+92','+49'],
    salary: function(){
        return 10000;
    },
    fullname: function(){
       return this.fname + " " + this.lname;
    }
    // you can also used function in objects but the most important things is fname is not defined you must
    // use this keyword.. a.fname, call this function  (owner name verify )// salary and fullname are methods and 
    // other is properties
};
console.log(a);
console.log(a.email);
console.log(a.phone_No[1]);
console.log(a.salary())
console.log(a.fullname());


// Object into the Object Nested Object .An Object wihin the Object is known as Nested Object

var FullStack={
    Name: 'John',
    Work:'Senior Web Developer',
    Slary:3000000,

    LanguageExpert:{
        
        language:['C++','JavaScript','ReactJS'],
        Experience:'1 Year',
    },
};
console.log(FullStack.LanguageExpert.language);


// Practisce   

var departments={
    departments: 'Software Enginneering',
    Semester:'4th Morning',
    Program:'BS',
  
 details:{
    CGPA:3.95,
    percentage:99
 },
};
console.log(departments);
console.log(departments.details.CGPA);




const courses={
    subjects:['DataStructures & Algorithms','Database System',"Web Applications"],
    field:"Software Engineering",

    MainSubjects:{
   s1:'Web and Desktop Applications',
   s2:'Android and Ios Application',
    },
};
console.log(courses.subjects[0]);
console.log(courses.MainSubjects.s1)


const Engineer={
    name1:'software Enginner',
    Goal1:'Full Stack Web Developer',
    web: function() {
        return "I am a " + this.name1 + "and Work as a " +this.Goal1;
      

    }
};
console.log(Engineer.web());

