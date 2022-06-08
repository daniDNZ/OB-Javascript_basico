const name = "Daniel";
console.log("Nombre: "+name);

const surname = "Sanz";
console.log("Apellido: "+surname);

const student = `${name} ${surname}`;
console.log("Estudiante: "+student);

const studentMayus = student.toUpperCase();
console.log("Estudiante en mayúscula: "+studentMayus);

const studentMinus = student.toLowerCase();
console.log("Estudiante en minúscula: "+studentMinus);

const numLetters = student.length;
console.log("Número de letras de estudiante (incluído el espacio): "+numLetters);

const firstLetter = name.slice(0,1);
console.log("Primera letra del nombre: "+firstLetter);

const lastLetter = surname.slice(surname.length-1, surname.length);
console.log("Última letra del apellido: "+lastLetter);

const withoutSpaces = student.replace(" ", "");
console.log("Estudiante sin espacios: "+withoutSpaces);

const isThere = student.toLowerCase().includes("daniel");
console.log("Contiene \"daniel\"? "+isThere);