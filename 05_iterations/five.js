const coding =["js","python","java ","cpp","c"]

// coding.forEach(function (val){
//     console.log(val);
    
// })

// coding.forEach( (item) => {
//     console.log(item);
    
// } )

function printme(item){
    console.log(item);
    
}

// coding.forEach(printme)

coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);

})

const mycoding =[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"C Programming",
        languageFileName:"c"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
]

mycoding.forEach((item) =>{
    console.log(item.languageName);
    
} )