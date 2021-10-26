/**
 * Archivo principal del API
 */
 const express = require("express"); 
 const path = require('path');

 const app = express();
 app.use(express.json());

 //Settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }))
 
 // INVOCAR LAS RUTAS DE LA CARPETA ROUTERS
 const routers = require('./routers/index');
 app.use(routers);
 
 //INICIALIZANDO EL API
 const port = 3000;
 app.listen(port, () =>{
     console.log(`API node: http://localhost:${port}/`);
 });