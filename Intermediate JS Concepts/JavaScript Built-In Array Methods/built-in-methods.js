// let people = ["John", "James", "Jimmy", "Jane"]
// console.log(`There are ${people.length} people`)

// let people = {
//     0: "John",
//     1: "James",
//     2: "Jimmy",
//     3: "Jane",
//     length: 4,
//     map: function(callback){
//         newArr = [];
//         for(let i = 0; i < this.length; i++){
//             newArr.push((callback[i]))
//         }
//         return newArr;
//     }
// }

// console.log(people[0]);
let introductions = people.map(() => {
    return `My name is ${person}.`
})