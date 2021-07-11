const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');

const colors = require('colors');

console.clear();


console.log(argv);
console.log('Base: yargs',argv.b);

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(`${nombreArchivo.rainbow} Creado`))
    .catch(error=>console.log(erro))

// const [,,arg3='base=5'] = process.argv;

// const [,base] =arg3.split("=");

// const base = 3;

// crearArchivo(base)
//     .then(nombreArchivo => console.log(`${nombreArchivo} Creado`))
//     .catch(error=>console.log(erro))