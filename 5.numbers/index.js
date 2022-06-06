const heightInCm = 174;
console.log('Altura en cm: '+ heightInCm);

const heightInM = 1.74;
console.log('Altura en m: '+ heightInM);

const weightInKg = 60.5;
console.log('Peso en kg: '+ weightInKg);

const heightCeil = Math.ceil(heightInM);
console.log('Altura redondeada hacia arriba: '+ heightCeil);

const weightFloor = Math.floor(weightInKg);
console.log('Peso redondeado hacia abajo: '+ weightFloor);

const isEqual = (Number.MAX_VALUE + 1 === Number.MAX_VALUE);
console.log('El máximo valor que se puede obtener en Javascript + 1 es igual al máximo valor que se puede obtener en Javascript? '+ isEqual);