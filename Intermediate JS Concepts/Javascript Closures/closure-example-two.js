function superHero(name){
    let powerlevel = Math.random() * 100;
    return function(catchPhrase){
        console.log(`My name is ${name}. Power level is ${powerlevel} and 
        ${catchPhrase}`)
    }
}

let toiletManCatchPhrase = superHero("Toilet Paper Man")
toiletManCatchPhrase('Im going to wipe the floor with you')
toiletManCatchPhrase("Did someone say flush")

// let batmanCatchPhrase = superHero("Batman")
// batmanCatchPhrase("I am vengeance")

superHero('Batman')("I am vengeance")


function addition(a){
    let num1 = a;
    return function(b){
        let num2 = b
        console.log(num1+num2)
    }
}

addition(798429749)(9495785)