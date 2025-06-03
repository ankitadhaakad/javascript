let num1=10;
let num2=20;
let operator='+,-,*,/';
let result;

switch(operator){
    case '+':
        result=num1+num2;
        break;
    case '-':
        result=num1-num2;
        break;
    case '*':
        result=num1*num2;
        break;
    case '/':
        result=num1/num2;
        break;
    default:
        result="invalid";
        break;
    }
    console.log(result);