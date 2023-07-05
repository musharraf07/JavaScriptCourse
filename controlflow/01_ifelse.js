// if
// const isUserLoggedIn = true;

// if(2 =="2"){
//     console.log("execcuted");

// }

// const balance =1000;

// if(balance>500) console.log("greater than 500");


const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard ){
    console.log("allow user to buy products");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}