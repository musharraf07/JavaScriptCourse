class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return`123`
    }

}

const mush = new user("musharraf")
// console.log(mush.createId());



class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email  = email
    }
}

const tea = new Teacher('tea', 'tea@gmail.com')
console.log(tea.createId());