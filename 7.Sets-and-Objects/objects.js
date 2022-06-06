const data = {
    name: 'Dani',
    surname: 'Sanz',
    age: '30',
    height: '174',
    areYouADeveloper: true
}

const age = data.age;
console.log('Edad: ', age);

const list = [data, 
{
    name: 'Manuel',
    surname: 'Gutiérrez',
    age: '32',
    height: '184',
    areYouADeveloper: false
}, 
{
    name: 'Peter',
    surname: 'Petegrew',
    age: '22',
    height: '160',
    areYouADeveloper: false
}]

const sortedList = list.sort((a, b) => a.age - b.age);