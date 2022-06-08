const alwaysTrue = () => true;

console.log('Función alwaysTrue: ', alwaysTrue());

// Promesa 
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        true
        ? resolve()
        : reject()
    }, 5000);
})

myPromise
    .then(() => console.log('Hola, soy una promesa'))
    .catch(() => console.log('Error'));


// Función generadora
function* pairIndex() {
    let id = 0;
    while(true) {
        id += 2;
        yield id;
    }
}

const genIndex = pairIndex();

console.log('New index:', genIndex.next().value);
console.log('New index:', genIndex.next().value);
console.log('New index:', genIndex.next().value);
console.log('New index:', genIndex.next().value);
console.log('New index:', genIndex.next().value);
console.log('New index:', genIndex.next().value);
console.log('New index:', genIndex.next().value);