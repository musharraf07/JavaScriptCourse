function setusername(username) {
    this.username = username
    console.log("called");
    
}



function createUser(username, email, password){
    setusername.call(this, username) //this is optional it is used to change tthe current context
    // call is used to call a function inside another function
    this.email = email
    this.password = password
}


const chai = new createUser("chai", "chai@gmail.com", "123")
console.log(chai);