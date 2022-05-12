function getFactorial(n){
    if (n === 1 || n === 0){
        return 1;
    }
    else if(n < 0){
        return -1;
    }
    else{
         
        return n * getFactorial(n - 1);
    }
}

var x = Number(prompt("Введите число x"));
var result = getFactorial(x);

alert(`Факториал ${x} = ${result}`);