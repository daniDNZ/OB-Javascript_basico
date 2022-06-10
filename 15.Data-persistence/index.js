const myName = 'Daniel';
const mySurname = 'Sanz';
const myObject = {name: myName, surname: mySurname};

sessionStorage.setItem('user', JSON.stringify(myObject));
localStorage.setItem('user', JSON.stringify(myObject));

const d = new Date();
d.setMinutes(d.getMinutes() + 2);
document.cookie = 'user=' + JSON.stringify(myObject) +
    '; expires=' + d.toUTCString();