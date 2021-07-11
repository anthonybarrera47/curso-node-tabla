const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 1, listar,hasta) => {
  try {
    let salida = '' , consola= '';

    for (let i = 1; i <= hasta; i++) {
      consola += `${colors.yellow(i)} ${'x'.red} ${colors.blue(base)} = ${colors.green(i * base).trap}\n`;
      salida += `${i} x ${base} = ${i * base}\n`;
    }

    if (listar) {
      console.log("===================".green);
      console.log(`   Tabla del ${base}   `.blue);
      console.log("===================\n".green);
      console.log(consola);
    }

    // fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
    //     if(err) throw err;

    //     console.log(`tabla del ${base} creada`);
    // })

    const nombreArchivo = `./salidas/tabla-${base}.txt`;
    fs.writeFileSync(nombreArchivo, salida);

    //console.log(`tabla del ${base} creada`);
    return nombreArchivo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
