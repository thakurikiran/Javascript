for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i==5) {
        // console.log('5 is detected');
        
    }
    // console.log(element);
     
}
// console.log(element);

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j <=10; j++) {
        // console.log(`Inner loop value ${j} and Outer loop value ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
          
    }
    
}

let myArray = ["Superman","Batman","Antman"]
// console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}

//Break and Continue

for (let i = 0; i <=10; i++) {
    const element = i;
    if (i==5) {
        console.log("5 is detected");
        // break;
        continue
        
    }
    console.log(element);
      
}
