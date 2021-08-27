// Módulos
const express = require('express');
const app = express();
// Acá falta uno... 😇
const path = require('path');
const mainRouter = require('./src/routes/mainRouter')

// Configuración
app.use(express.static('public'));
// Acá falta el template engine
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS
app.use('/', mainRouter );

let port = process.env.PORT || 3000;
app.listen(port, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})
