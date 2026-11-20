// calculator Project:
function add(a:number,b:number):number{
    return a+b;
}
function sub(a:number,b:number):number{
    return a-b;
}
function mult(a:number,b:number):number{
    return a*b;
}
function divide(a:number,b:number):number{
    if(b===0)
        throw new Error("Cannot divide by zero");
    return a/b;
}

const num1: number = 20;
const num2: number = 10;


console.log("Addition:", add(num1, num2));

console.log("Subtraction:", sub(num1, num2));

console.log("Multiplication:", mult(num1, num2));

console.log("Division:", divide(num1, num2));
