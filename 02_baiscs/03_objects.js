// singleton

// Object.create

//object literals
const mysym =Symbol("key1")

const Jsuser ={
    name :"Kiran",
    "Full name":"kiran shahi",
    [mysym]:"mykey1",              //if you want to declare like symbol then you have to put [] bracket    
    age :21,
    location:"surkhet",
    email:"shahikiran575@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["Full name"]);
// console.log(Jsuser[mysym]);

Jsuser.email ="okxata@gmail.com"
// Object.freeze(Jsuser)
Jsuser.email ="kfhuhdh@gmail.com"
// console.log(Jsuser);


Jsuser.greeting =function(){
    console.log("Hello Js user");
    
}
Jsuser.greetingtwo =function(){
    console.log(`Hello Js user,${this.name}`);
    
}
console.log(Jsuser);

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());




