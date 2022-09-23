// ** Call back functions **
// A call back function is a function that is passed in as an argument to another function

function executeThreeTimes(callback){
    for(let i = 0; i < 3; i++){
        callback();
    }
}

function printFullName() {
    console.log("john doe")
}

executeThreeTimes(printFullName)