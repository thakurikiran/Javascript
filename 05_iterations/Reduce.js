const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval) {
//             console.log(`acc: ${acc} and  current value: ${currval}`);
            
//                 return acc + currval
// },0)

// const myTotal = myNums.reduce( (acc, currval) => (acc + currval) ,0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName :"js course",
        Price: 999

    },
    {
        itemName :"Python course",
        Price: 2999

    },
    {
        itemName :"datascience course",
        Price: 1999

    },
]

const PricetoPAy = shoppingCart.reduce( (acc,item) => acc + item.Price,0)


console.log(PricetoPAy);
