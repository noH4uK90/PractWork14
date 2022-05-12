function factorial(n){
    var result = 1;
    while(n){
        result *= n--;
    }
    return result;
}

var x = Number(prompt("Введите число x"));
var result = factorial(x);

alert(`Факториал ${x} = ${result}`);