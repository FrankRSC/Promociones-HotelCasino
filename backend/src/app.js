const  express  = require('express');
const  morgan  = require('morgan');


//importa cors
const cors = require('cors');

const app = express();
app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));

//Dos servidores pueden intercambiar datos entre ellos con cors
app.use(cors());

//para que el servidor use express con formatos json
app.use(express.json());

//------- Routes - Rutas de la api -----//

//Cuando se visite /api/usuarios usara el archivo ./routes/users
//app.use('/api/usuarios', require('./routes/users'));

//Ruta que maneja las promociones
app.use('/api/promociones', require('./routes/promociones.routes'));

//ruta que maneja los reportes de venta
app.use('/api/reportedeventas', require('./routes/reportedeventas.routes'));

//ruta que maneja las solicitudes
app.use('/api/solicitudpromocion', require('./routes/solicitudpromo.routes'));

//ruta que maneja las solicitudes
app.use('/api/flyer', require('./routes/flyer.routes'));


module.exports = app;