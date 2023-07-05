const user ={
    username: "musharraf",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username ="Musharraf"
//     console.log(this);
// }
// chai()


// arrow functions
// const chai = () => {
//     console.log("Chai aur code")
//     let username ="Musharraf"
//     console.log(this);
// }
// chai()


// const addtwo = (num1, num2) => num1 + num2 * num1
// const addtwo = (num1, num2) => (num1 + num2)
// const addtwo = (num1, num2) => ({username: "Musharraf"})
// console.log(addtwo(2,3));


// (function chai(){
//     console.log('DB Connected');
// })();


( (name) => {
    console.log(`DB connected ${name}`);
})('mush');

