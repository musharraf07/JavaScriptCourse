const user = {
    username: "musharraf",
    login: 10,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`username: ${this.username}`);
        console.log(this);

    }
};


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, logincount, isloggedIn){
    this.username = username;
    this.loginCount = logincount;
    this.isloggedIn = isloggedIn;

    this.greet = function () {
        console.log(`welcome ${this.username}`);
        
    }

    // return this;

}

// New keyword in JavaScript is used to create an instance of an object that has a constructor function. On calling the constructor function with 'new' operator, the following actions are taken: A new empty object is created.



const userOne = new  User("Musharraf", 2, true)
const userTwo = new User("Chai", 3 , false)
console.log(userOne.constructor);
// console.log(userTwo);






