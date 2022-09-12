let people = [
    {
      name: "james",
      age: 34
    }, 
    {
      name: "John",
      age: 43
    },
    {
      name: "Jane",
      age: 23
    }
  ]

for(let i = 0; i < people.length; i++){
    console.log(people[i])
    if (people.name == "John"){
      console.log("I found John!")
        } else if(people.name == "Jane") {
      console.log("Hey Jane, do you know where John is?")
    } else {
      console.log("Hey do you know someone by the name of John?")
    }
}