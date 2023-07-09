const mynums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = mynums.map((num) => num+10)
// console.log(newNums)


// chainning
const newNums = mynums
                    .map((num) => num*2)
                    .map((num) => num+2)
                    .filter((num) => num > 10)
// console.log(newNums)



// reduce

const nums =[1,3,2]

const mytotal = nums.reduce((acc, currval) =>{
    console.log(`acc ${acc} & curr val ${currval}`)
    return acc + currval
}, 3)

console.log(mytotal);


const cart = [
    {
        itemname: "Js course",
        price: 2999
    },
    {
        itemname: "Java course",
        price: 7999
    },
    {
        itemname: "MERN course",
        price: 9999
    },
    {
        itemname: "Python course",
        price: 5999
    }
]


const totalprice = cart.reduce((acc, item) => acc +  item.price, 0)
console.log(totalprice);