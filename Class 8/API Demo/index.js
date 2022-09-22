fetch("https://v2.jokeapi.dev/joke/Any?safe-mode").then((response) => {
    return response.json();
}).then((data) => {
//     let imageElement = document.getElementById("99");
console.log(data)



document.body.innerHTML = `
<p>${data.setup}</p>
<p>${data.delivery}</p>
<p> ${data.joke}</p>`

//     imageElement.src = data.url
 })