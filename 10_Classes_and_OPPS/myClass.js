// ES6

class user {
    constructor(username, email, passworrd){
     this.username = username
     this.email = email
     this.passworrd = passworrd   
    }

    encryptPassword(){
        return `${this.passworrd} abc`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("mush", "mush@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeusername());