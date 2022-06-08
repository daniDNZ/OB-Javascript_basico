const logger = require('./logger');

const errorFunction = () => {
    if (true) throw new Error('Esta es la función error');
}

try {
    errorFunction()
} catch(e) {
    logger.error(`${e}`);
}
