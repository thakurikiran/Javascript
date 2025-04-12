
// const tinderuser =new Object()    //singleton

const tinderuser= {
    
} //nonsingleton

tinderuser.name="kiran"
tinderuser.id= "123"
tinderuser.isLoggedIn= false
// console.log(tinderuser);


// console.log(tinderuser);

const regularuser ={
    fullname:{
        userfullname: {
            firstname:"kiran",
            lastname: "shahi"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2= {3:"a",4:"b"}

// const obj3={ obj1 , obj2 } 

// const obj3=Object.assign({},obj1,obj2)        //all the value of backward come to cbraces and store it if there value are obj1 obj2 obj3 then the string are stored in obj1 if there is not cbraces


const obj3= {...obj1,...obj2};

// console.log(obj3);  // we print obj3 here if the cbraces is not there then we print obj 1


const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]

// console.log(users[1].email ) //for accessing



// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));


// console.log(tinderuser.hasOwnProperty('nam'));

 const course ={
    coursename : "Js by chai aur code ",
    price :"free",
    courseInstructor : "Hitesh paji",
    
 }

//  course.courseInstructor

const {courseInstructor:Instructor}=course
console.log(Instructor);

const navbar = ({company}) => {



}
navbar(company="hitesh")



{
    "name":"kiran",
    "coursename":"js ho yr ",
    "price ":"free xa",
}

[
    {},
    {},
    {}
]











