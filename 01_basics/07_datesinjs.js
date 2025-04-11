//Dates

let mydate =new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);



// let myCreatedDate=new Date(2025,10,27)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate=new Date(2025,10,27,8,12)
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate=new Date("2025-10-27")
// let myCreatedDate=new Date("10-27-2025")
// console.log(myCreatedDate.toLocaleString());

// let mytimestamp =Date.now()

// console.log(mytimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());
'${newDate.getDay()}'


newDate.toLocaleString('dafault',{
    weekday:"long",
})





