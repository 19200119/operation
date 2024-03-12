let btn1 = document.getElementById("red")
let btn1 = document.getElementById("green")
let btn1 = document.getElementById("blue")

let divred = document.getElementById("box1")
let divgreen = document.getElementById("box2")
let divblue= document.getElementById("box3")

btn1.addEventListener("click",()=>{
    divred.style.backgroundColor="red"
})

btn2.addEventListener("click",()=>{
    divgreen.style.backgroundColor="green"
})

btn3.addEventListener("click",()=>{
    divblue.style.backgroundColor="blue"
})

