const app = require('./app');
require('./models/database.js');

async function main () {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}


//ejecucion de la funcion main
main();




