class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(this.username);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addcourse(){
        console.log(this.username);
    }
}


const chai = new Teacher("chai", "chai@gmail.com", "123")
chai.addcourse()
chai.logMe()

const tea = new user("musharraf")
tea.logMe()


console.log(chai instanceof Teacher);