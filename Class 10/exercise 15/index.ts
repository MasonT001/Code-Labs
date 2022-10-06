let numberss: number[] = [1,2,3,4,5,6,7,8,9,10]
       
function addNumbersToWebpage(array){
    for(let i: number =0; i < array.length; i++){
        let para = document.createElement("p");
        para.innerText = `${array[i]}`
        document.body.appendChild(para)
    }
}

addNumbersToWebpage(numbers)