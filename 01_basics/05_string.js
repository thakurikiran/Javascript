const name = "kiran"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('kiran-ks-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());  //clear the space 

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))   //%20 is replace by -

// console.log(url.includes('hitesh'))  //true it is on url
// console.log(url.includes('sundar'))  //false it is not

// console.log(gameName.split('-'));  //split the string