import {sum, rest, mul, div, mod, inv, sqr, sqrt} from "./calculadora.js";

console.log(div(19,0));

var op = '';
var num1 = 99;
var num2 = 0;
var res = 0;

const bttnPressed = (event) => {
    const inputField = document.getElementById('res');

    if (event.target.tagName === 'BUTTON') {
        const buttonValue = event.target.value;
        if (buttonValue === 'C' || buttonValue === "CE") {
            inputField.value = '0';
        } else if (buttonValue === '◀') {
            inputField.value = inputField.value.slice(0, -1);
        } else if (buttonValue === '0') {
            if (inputField.value === '0') {
                inputField.value = '0';
            } else {
                inputField.value += '0';
            }
        } else if (buttonValue === '.') {
            if (!inputField.value.includes('.')) {
                inputField.value += '.';
            }
        } else if (buttonValue === 'neg') {
            const num = parseFloat(inputField.value);
            const newNum = (num < 0) ? Math.abs(num) : -num;
            inputField.value = newNum;
            console.log(newNum);
        } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === 'x' ||
            buttonValue === '/' || buttonValue === '%') {
            num1 = parseFloat(inputField.value);
            op = buttonValue;
            console.log(num1, op);
            inputField.value = "0";
        } else if (buttonValue === 'inv' || buttonValue === 'sqr' || buttonValue === 'sqrt') {
            op = buttonValue;
            num1 = parseFloat(inputField.value);
            console.log(num1);
            inputField.value = "0";
            switch(op){
                case 'inv':
                    res = inv(num1);
                    break;
                case 'sqr':
                    res = sqr(num1);
                    break;
                case 'sqrt':
                    res = sqrt(num1);
                    break;
                default:
                    inputField.value = 'Error';
                    break;
            }
            console.log(res);
            inputField.value = res;
        } else if (buttonValue === '=') {
            num2 = parseFloat(inputField.value);
            console.log(num2);
            inputField.value = "0";
            switch(op){
                case '+':
                    res = sum(num1, num2);
                    break;
                case '-':
                    res = rest(num1, num2);
                    break;
                case 'x':
                    res = mul(num1, num2);
                    break;
                case '/':
                    res = div(num1, num2);
                    break;
                case '%':
                    res = mod(num1, num2);
                    break;
                default:
                    inputField.value = 'Error';
                    break;
            }
            console.log(res);
            inputField.value = res;
        } else {
            if(inputField.value === '0'){
                inputField.value = buttonValue;
            }else{
                inputField.value += buttonValue;
            }
        }
    }
};

document.getElementById('calcu').addEventListener('click', bttnPressed);


