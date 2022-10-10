class Logger {
    logRandomNumber(){
        console.log(Math.random()* 1000)
    }

    logRandomColor(){
        let colors = ["red", 'orange', 'yellow', 'blue', 'green']
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        console.log(randomColor)

    }

    logTo100(){
        for(let i=0; i < 100; i++){
            console.log(i)
        }
    }
}

let n = new Logger()

n.logTo100()
n.logRandomColor()
n.logRandomNumber()