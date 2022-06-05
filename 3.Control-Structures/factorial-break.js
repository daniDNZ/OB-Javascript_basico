let result = 1;
let i = 1;

while (true) {
    if (i <= 10) {result *= i} else break;
    i++;
}

console.log("Factorial de 10 - BREAK: "+result);