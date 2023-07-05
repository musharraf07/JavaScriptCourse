function sayMyName(){
    console.log("Musharraf")
}

// sayMyName()



// function add(a,b){
//     console.log(a+b);
// }


function add(a,b){
    // let result = a +b;
    // return result
    return a+b;
}

const result = add(1,4)
//  console.log(result) 


function loginUserMessage(username = "sam"){
    if(!username ){
        console.log("Plzz enter username ")
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Musharraf"))
// console.log(loginUserMessage("Mush"))


// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,2002,2002))


function calculateCartPrice(val1,val2,...num1){
    return  num1
}

// console.log(calculateCartPrice(200,2002,3000,400,5000))


const user = {
    username:"musharraf",
    price:100
}


function handleObject(anyobject){
    console.log(`Usernmae is ${anyobject.username} and price is ${anyobject.price}`)
}


// handleObject(user)
// handleObject({
//     username:'sam',
//     price: 200
// })




const myNewArray = [100,200,300,400]

function returnSecondVal(getarray){
    return getarray[2]

}
console.log(returnSecondVal(myNewArray))
