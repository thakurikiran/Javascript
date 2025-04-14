
// function sayMYname() {
//         console.log("k");
//         console.log("I");
//         console.log("R");
//         console.log("A");
//         console.log("N");

// }

//     sayMYname()


    function addTwoNumbers(num1 ,num2,num3){

        // let result = num1+num2
        // return result
         return num1 + num2 +num3
         console.log("kiran"); //not  execute because of return 
           
    }
   const result= addTwoNumbers(3,4,5)
//    console.log("result:",result);


   function loginUserMessage(username){
    if(username===undefined){
        // console.log("please enter your name");
        return
        
    }
     return `${username} just logged in`

   }
// console.log(loginUserMessage())

// console.log(loginUserMessage("shahi"));

function calculateCartPrice(val1,val2,...num1) {

    return  num1
}

    // console.log(calculateCartPrice(100,200,300,400))

   const user ={
    username:"kiran",
    email:"shahikirn4@gmail.com",
    price:199
   } 

      function handleObject(jnyobject){
        console.log(`username is ${jnyobject.username} and price is ${jnyobject.price}`);
        
    
       }
//  handleObject(user);

handleObject({
    username:"shahi",
    price:500
})


const myNewArray =[200,399,488,577]

function returnsecondval(arraydey){
     return arraydey[1]
    }

console.log(returnsecondval([1,2,3,4]))



  

   
   
   


