class Observable{
    subscribers = [];

    subscribers(fn){
        this.subscribers.push(fn)
    }

    unSubscribe(removeFn){
        this.subscribers = this.subscribers.filter((fn) =>{
            return fn != removeFn
        })
    }
    broadcast(value){
        this.subscribers.forEach((fn) =>{
            fn(value)
        });
    }
}

let celebrityObservable = new Observable();
celebrityObservable.subscribe((event) => {
    console.log(`I am going to ${event}`)
})

const someFan = (event)=>{
    console.log(`i am not going to ${event}`)
}
celebrityObservable.subscribe(someFan);

celebrityObservable.broadcast("Disco Morning");

celebrityObservable.unSubscribe(someFan);
celebrityObservable.broadcast("Fun night concert")