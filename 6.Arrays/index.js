let shoppingList = [
    'patatas', 'agua', 'leche', 'cereales'
];
console.log('Lista de la compra: '+shoppingList);

shoppingList.push('aceite de girasol');
console.log('Añade aceite de girasol: '+shoppingList);

shoppingList = shoppingList.filter(item => item !== 'aceite de girasol');
console.log('Elimina aceite de girasol: ', shoppingList);

const favMovies = [
    {
        title: 'El señor de los anillos: El retorno del rey',
        director: 'Peter Jackson',
        date: new Date('2003-12-17')
    }, 
    {
        title: 'The Matrix',
        director: 'Wachowsky Sisters',
        date: new Date('1999-03-31')
    },
    {
        title: 'Tick, Tick... Boom!',
        director: 'Lin-Manuel Miranda',
        date: new Date('2021-11-10')
    }
];

let result = [];
favMovies.forEach(movie => {
    result = [...result, `Título: ${movie.title}. Director: ${movie.director}. Estreno: ${movie.date.getFullYear()}`];
})
console.log('Películas favoritas: '+ result);

const newestFavMovies = favMovies.filter(movie => movie.date.toISOString() >= '2010-01-01');
console.log('Películas favoritas posteriores al 1-1-2010: ', newestFavMovies);

const directors = favMovies.map(movie => movie.director);
console.log('Directores: ', directors);

const titles = favMovies.map(movie => movie.title);
console.log('Títulos: ', titles);

const directorsAndTitles = directors.concat(titles);
console.log('Directores y títulos con concat: ', directorsAndTitles);

const directorsAndTitles2 = [...directors, ...titles];
console.log('Directores y títulos con propagación: ', directorsAndTitles2);