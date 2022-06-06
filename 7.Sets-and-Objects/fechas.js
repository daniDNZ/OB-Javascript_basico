const today = new Date();
console.log('Fecha de hoy: ', today.toLocaleString('es-ES'));

const myBirthday = new Date('11-1-1991');
console.log('Fecha de mi nacimiento: ', myBirthday.toLocaleString('es-ES'));

const amIAlive = today > myBirthday;
console.log('Hoy es más tarde que mi cumpleaños? ', amIAlive);

const myDay = myBirthday.getDate();
console.log('El día de mi cumpleaños: ', myDay);

const myMonth = myBirthday.getMonth();
console.log('El mes de mi nacimiento: ', myMonth+1);

const myYear = myBirthday.getFullYear();
console.log('Mi año de nacimiento: ', myYear);