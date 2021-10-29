const express = require('express');
const router = express.Router();
//const _mysql =require('../services/mysql.service');
const _pg = require('../services/postgress.service')


router.use(express.json());  
router.use(express.urlencoded()); 

//Rutas Encuesta Prestamos
router.get('/Prestamo', (req, res) => {
    res.render('encuestaPrestamo.html');
});

router.post("/Prestamo", async (req, res) => {
    let { atencionp, 
      procesop, 
      disponibilidad, 
      estadoLibros, 
      actualidad, 
      dotacion, 
      comentarios,
      tipo } = req.body;

    const tiempoTranscurrido = Date.now();
    var hoy = new Date(tiempoTranscurrido);
    hoy = hoy.toLocaleDateString('en-CA')
    
  
    let errors = [];
    
    console.log({
        atencionp, 
        procesop, 
        disponibilidad,
        estadoLibros,
        actualidad,
        dotacion,
        comentarios,
        hoy,
        tipo
    });
  
      if(!atencionp || !procesop || !disponibilidad || !estadoLibros || !actualidad || !dotacion || !tipo){
        errors.push({ message: "Espacio Vacio" });
      }

  
      if(errors.length > 0){
        res.render('encuestaPrestamo.html', {errors})
      } else {

        let sql = `INSERT INTO prestamo
        (atencionpersonal,
        procedimientoprestamo,
        disponibilidad,
        estadolibros,
        actualidadrecursos,
        dotacion,
        idcliente,
        comentarios,
        fecha)
        VALUES
        ('${atencionp}',
        '${procesop}',
        '${disponibilidad}',
        '${estadoLibros}',
        '${actualidad}',
        '${dotacion}',
        '${tipo}',
        '${comentarios}',
        '${hoy}');`
      
        await _pg.execute(sql);
  
        //Envia Informacion a la Base de datos y esperar Respuesta

        res.redirect("/Respuesta");
      }
  });


//Rutas Encuesta Espacios
router.get('/Espacios', (req, res) => {
  res.render('encuestaEspacios.html');
});

router.post("/Espacios", async (req, res) => {
  let { iluminacion,
    temperatura,
    ruido,
    limpieza,
    estado,
    instructivos,
    seniales,
    comentarios, 
    tipo } = req.body;

  const tiempoTranscurrido = Date.now();
  var hoy = new Date(tiempoTranscurrido);
  hoy = hoy.toLocaleDateString('en-CA')

  let errors = [];
  
  console.log({
    iluminacion,
    temperatura,
    ruido,
    limpieza,
    estado,
    instructivos,
    seniales, 
    comentarios,
    hoy,
    tipo
  });

    if(!iluminacion || !temperatura || !ruido || !limpieza || !estado || !instructivos || !seniales || !tipo){
      errors.push({ message: "Espacio Vacio" });
    }


    if(errors.length > 0){
      res.render('encuestaEspacios.html', {errors})
    } else {

      let sql = `INSERT INTO espacio
      (iluminacion,
        temperatura,
        ruido,
        limpieza,
        estadofuncionamiento,
        instructivosoperacion,
        senalizacion,
        idcliente,
        comentarios,
        fecha)
      VALUES
      ('${iluminacion}',
      '${temperatura}',
      '${ruido}',
      '${limpieza}',
      '${estado}',
      '${instructivos}',
      '${seniales}',
      '${tipo}',
      '${comentarios}',
      '${hoy}');`
    
      await _pg.execute(sql);

      //Envia Informacion a la Base de datos y esperar Respuesta

      res.redirect("/Respuesta");
    }
});

//Rutas Encuesta Renovaciones
router.get('/Renovaciones', (req, res) => {
  res.render('encuestaRenovacion.html');
});

router.post("/Renovaciones", async (req, res) => {
  let { atencionr,
    procesor,
    horario, 
    comentarios,
    tipo } = req.body;

  const tiempoTranscurrido = Date.now();
  var hoy = new Date(tiempoTranscurrido);
  hoy = hoy.toLocaleDateString('en-CA')

  let errors = [];
  
  console.log({
    atencionr,
    procesor,
    horario, 
    comentarios,
    hoy,
    tipo
  });

    if(!atencionr || !procesor || !horario || !tipo){
      errors.push({ message: "Espacio Vacio" });
    }


    if(errors.length > 0){
      res.render('encuestaRenovacion.html', {errors})
    } else {

      let sql = `INSERT INTO renovacion
      (atencionpersonal,
        procedimientorenovacion,
        horariosatencion,
        idcliente,
        comentarios,
        fecha)
      VALUES
      ('${atencionr}',
      '${procesor}',
      '${horario}',
      '${tipo}',
      '${comentarios}',
      '${hoy}');`
    
      await _pg.execute(sql);

      //Envia Informacion a la Base de datos y esperar Respuesta

      res.redirect("/Respuesta");
    }
});

//Rutas Encuesta Cubículos
router.get('/Cubiculos', (req, res) => {
  res.render('encuestaCubiculos.html');
});

router.post("/Cubiculos", async (req, res) => {
  let { atencion,
    proceso, 
    comentarios,
    tipo } = req.body;

  const tiempoTranscurrido = Date.now();
  var hoy = new Date(tiempoTranscurrido);
  hoy = hoy.toLocaleDateString('en-CA')

  let errors = [];
  
  console.log({
    atencion,
    proceso,
    comentarios, 
    hoy,
    tipo 
  });

    if(!atencion || !proceso || !tipo){
      errors.push({ message: "Espacio Vacio" });
    }


    if(errors.length > 0){
      res.render('encuestaCubiculos.html', {errors})
    } else {

      let sql = `INSERT INTO reserva_cubiculos
      (atencionpersonal,
        procedimientoreserva,
        idcliente,
        comentarios,
        fecha)
      VALUES
      ('${atencion}',
      '${proceso}',
      '${tipo}',
      '${comentarios}',
      '${hoy}');`
    
      await _pg.execute(sql);

      //Envia Informacion a la Base de datos y esperar Respuesta

      res.redirect("/Respuesta");
    }
});

//Ruta respuesta
router.get('/Respuesta', (req, res) => {
  res.render('respuesta.html');
});

//Ruta Inicio de encuestas
router.get('/Inicio', (req, res) => {
  res.render('inicio.html');
});

//Ruta inicio de sesión
router.get('/Sesion', (req, res) => {
  res.render('inicioAdmin.html')
})

router.post("/Sesion", async (req, res) => {
  let { usuario,
    contrasena} = req.body;

  let errors = [];
  
  console.log({
    usuario,
    contrasena
  });

    if(!usuario || !contrasena){
      errors.push({ message: "Espacio Vacio" });
    }


    if(errors.length > 0){
      res.render('inicioAdmin.html', {errors})
    } else {

      let sql = `SELECT * FROM usuario WHERE usuario = '${usuario}' and contraseña = '${contrasena}';`
    
      let response = await _pg.executeClient(sql);
      let rows = response.rows

      if (rows.length == 0) {
        errors.push({ message: "La Contraseña o Usuario son Incorrectos" });
        res.redirect('/Sesion')
      }else{
        res.redirect("/Admin");
      }
    }
});

//Ruta Página Admin
router.get('/Admin', (req, res) => {
  res.render('biblioteca.html')
})

module.exports = router;