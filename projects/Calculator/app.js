const resultApp = document.getElementById('result')

const first = document.getElementById('First')
const second = document.getElementById('Second')
const execute = document.getElementById('execute_btn')

const plus_btn = document.getElementById('plus_btn')
const minus_btn = document.getElementById('minus_btn')
const mult_btn = document.getElementById('multiple_btn')
const div_btn = document.getElementById('divide_btn')
let action = '+'

function symbol(name){
    return function(){
        action = name
    }
}

plus_btn.onclick = symbol('+')
minus_btn.onclick = symbol('-')
mult_btn.onclick = symbol('*')
div_btn.onclick = symbol('/')

function printResult (result){
    if(result < 0 ){
        resultApp.style.color = 'red'
    } else {
        resultApp.style.color = 'green'
    }
    resultApp.textContent = result
}

function compute (inp1, inp2, actionSymbol){
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    
    if ( actionSymbol == '+'){
        return num1 + num2
    }
    else if (actionSymbol == '*'){
        return num1 * num2
    }
    else if (actionSymbol == '/'){
        return num1 / num2
    }
    else if (actionSymbol == '-'){
        return num1 - num2
    }
}
execute.onclick = function(){    
    const result = compute(first, second, action)
    printResult(result)
}