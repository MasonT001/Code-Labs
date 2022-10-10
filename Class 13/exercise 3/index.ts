class Person {
    favoriteColor: string = '';

    logFavoriteColor(){
        console.log(this.favoriteColor)
    }
}

let p1: Person = new Person()
p1.favoriteColor = 'Blue'

p1.logFavoriteColor()