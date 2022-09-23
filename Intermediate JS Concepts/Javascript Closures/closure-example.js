// ** CLosure **
// When a fucntion remembers its variables

let x = 0;

function logToConsole() {
    console.log(x)
}

x = 10;

logToConsole()