
const add = function(a,b) {
    return a + b
}

const subtract = function(a,b) {
    return a - b
}

const multiply = function(a,b) {
    return a * b

}

const divide = function(a,b) {
    return a / b

}

let number1 
let number2 
let operator

function operate(operator, a, b) {
    return operator(a,b)
}


const buttons = Array.from(document.querySelectorAll('.button'))

// buttons.forEach(button => {
//     button.addEventListener('click',(e) => {
//         number1 = 
//     })
// })

