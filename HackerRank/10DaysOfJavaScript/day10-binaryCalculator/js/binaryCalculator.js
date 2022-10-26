function getNumberOfBinary(binary){
    number =0;
    for(let i = 0; i < binary.length; i++){
        number += Number(binary[binary.length - (i+1)] * 2**i);
    }
    return number.toString();
}

function getBinaryOfNumber(number){
    binary = number.toString(2);
    return binary;
}

function getResult(calc){
    const operations = ['-', '+', '*', '/'];
    const operation = operations.filter(op => calc.indexOf(op) !== -1);
    const [num1, num2] = calc.split(operation);
    
    const result = eval(getNumberOfBinary(num1)+operation+getNumberOfBinary(num2));
    return getBinaryOfNumber(result);
}

const allButtons = document.querySelectorAll('button');
const response = document.querySelector('#res');

allButtons.forEach( button => {
    button.addEventListener('click', () => {
        switch(button.innerHTML){
            case 'C':
                response.innerHTML = '';
                break;
            case '=':
                response.innerHTML = getResult(response.innerHTML);
                break;
            default:
                response.innerHTML += button.innerHTML;
                break;
            }
        });   
    })