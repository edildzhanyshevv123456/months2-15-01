function nums(n1, n2) {
    console.log(Math.min(n1, n2))
}
let num = {
    n1: prompt("Введите число"),
    n2: prompt("Введите число"),
}
nums(num.n1, num.n2)

function countChar() {
    const arr = prompt("Введите текст")
    console.log(arr.length)
}
countChar()