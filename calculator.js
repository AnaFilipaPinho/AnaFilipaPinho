const buttons = document.querySelector('button'); 
const screenDisplay = document.getElementsByClassName('.display');

function calculator(a, b){
    let result;
    switch(bottuns == '+', '-', 'x', '÷'){
        case '+':
            result = a + b
            console.log(result)
            break
        case '-':
            result = a - b
            console.log(result)
            break
        case 'x':
            result = a * b
            console.log(result)
            break
        case '÷':
            result = a / b
            console.log(result)
            break
        default:
            break}
}

buttons.addEventListener('click', function(){
    calculator();
})
