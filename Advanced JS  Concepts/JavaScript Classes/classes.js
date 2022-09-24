// A class is a blueprint for objects
class User{
    // instance properties -> data
    username = ''
    // Constructor -> that is executed when an instance gets created
    constructor(newUsername){
        this.username = newUsername;
        console.log('Instance was created')
    }
    // Methods -> define logic to manipulate data
    printMyName(){
        console.log(`My name is ${this.username}`)
    }
}


let user = new User("John123")
console.log(user)
user.printMyName();

let userTwo = new User("Amy123")
console.log(userTwo)
userTwo.printMyName();