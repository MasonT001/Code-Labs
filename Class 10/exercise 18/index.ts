let users: {name: string, age: number}[] = [
    {
      name: "John",
      age: 30,
    },
    {
      name: "Jimmy",
      age: 20,
    },
    {
      name: "Amy",
      age: 43,
    },
  ];
      function printUsers(array): void{
  
       for(let i: number =0; i < array.length; i++){
          let para = document.createElement("p")
          para.innerText = `Hello ${array[i].name}`
          document.body.appendChild(para)
          array.splice(1,1)
       }
          
      }
      printUsers(users)