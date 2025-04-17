
const user ={
    username:"hitesh",
    price :999,

   welcomeMessage: function(){
        console.log(`${this.username},Welcome to website`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username="Kiran"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username="Kiran"
//     console.log(this.username);
    
// }
// chai()


// const chai = function (){
//     let username="Kiran"
//     console.log(this.username);
// }
// chai()



// const chai = () =>{
//     let username="Kiran"
//     console.log(this.username);
// }
// chai()

// const addtwo =(num1,num2)=>{    
//     return num1 + num2         //Explicit return
// }
// console.log (addtwo(3,4 ))

// const addtwo =(num1,num2)=>  num1 + num2

// const addtwo =(num1,num2) =>  (num1 + num2)  //Implicit reeturn
const addtwo =(num1,num2) =>  ({Username:"Kiran"}) ()

console.log (addtwo(3,4 ))

const myArray =[2,3,4,5]

myArray.forEach(() => {})





