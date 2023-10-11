
const add = function(a,b) { return a + b }

const subtract = function(a,b) { return a - b }

const multiply = function(a,b) { return a * b }

const divide = function(a,b) { return a / b }



const buttons = Array.from(document.querySelectorAll('.button'))
const display = document.querySelector('#screen')
const operatorBtns = Array.from(document.querySelectorAll('#operators > div'))
const equalBtn = document.querySelector('#equal')
const clearBtn = document.querySelector('#clear-btn')


let active = 0
let firstNumbers = []
let secondNumbers = []
let chosenOperator

function updateScreen(numbers) {
    display.innerText = numbers
}

buttons.forEach(button => {
    button.addEventListener('click',(e) => {

    if (active === 0) {
        firstNumbers.push(e.target.innerText)
        updateScreen(firstNumbers.join(""))
    }

    else {
        secondNumbers.push(e.target.innerText)
        updateScreen(secondNumbers.join(""))
    }

    })
})


operatorBtns.forEach(button => {
    button.addEventListener('click',(e) => {
        chosenOperator = e.target.id
        active = 1
    })
})

equalBtn.addEventListener('click', (e) => {
    const result = operate(chosenOperator,Number(firstNumbers.join("")), Number(secondNumbers.join("")));
    console.log(Number(firstNumbers.join("")),Number(secondNumbers.join("")),chosenOperator)
    console.log(result)
    updateScreen(result)
})

function operate(operator, a, b) {

    if (chosenOperator == 'add') {
        return add(a,b)
    }
    
    else if (chosenOperator == 'subtract') {
        return subtract(a,b)
    }

    else if (chosenOperator == 'divide') {
        return divide(a,b)
    }

    else if (chosenOperator == 'multiply') {
        return multiply(a,b)
    }
}

function clear() {
    display.innerText = ""
    firstNumbers = []
    secondNumbers = []
    active = 0
}

clearBtn.addEventListener('click', clear)

