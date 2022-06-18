let button = document.getElementById("button1")
let buttn = document.getElementById("button2")

let num =0

button.onclick = () => {
    console.log(num++)
}
buttn.onclick = () => {
    console.log(num--)
}
