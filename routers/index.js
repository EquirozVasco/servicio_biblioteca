const express = require('express');
const router = express.Router();
//const _mysql =require('../services/mysql.service');
const _pg = require('../services/postgress.service')
const alert  = require('alert');


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
  
      if(!atencionp || !procesop || !disponibilidad || !estadoLibros || !actualidad || !dotacion){
        errors.push({ message: "Espacio Vacio" });
      }
      if(tipo == 'Tipo de usuario'){
        errors.push({ message: "Espacio Vacio" });
      }

  
      if(errors.length > 0){
        alert("Complete todos los campos")
        //res.render('encuestaPrestamo.html', {errors})
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

    if(!iluminacion || !temperatura || !ruido || !limpieza || !estado || !instructivos || !seniales){
      errors.push({ message: "Espacio Vacio" });
    }

    if(tipo == 'Tipo de usuario'){
      errors.push({ message: "Espacio Vacio" });
    }

    if(errors.length > 0){
      alert("Complete todos los campos")
      //res.render('encuestaEspacios.html', {errors})
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
    if(tipo == 'Tipo de usuario'){
      errors.push({ message: "Espacio Vacio" });
    }


    if(errors.length > 0){
      alert("Complete todos los campos")
      //res.render('encuestaRenovacion.html', {errors})
    } else {

      let sql = `INSERT INTO renovacion
      (atencionpersonal,
        procedimientorenovacion,
        horarioatencion,
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

    if(!atencion || !proceso){
      errors.push({ message: "Espacio Vacio" });
    }
    if(tipo == 'Tipo de usuario'){
      errors.push({ message: "Espacio Vacio" });
    }


    if(errors.length > 0){
      alert("Complete todos los campos")
      //res.render('encuestaCubiculos.html', {errors})
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
        alert("La Contraseña o Usuario son Incorrectos")
        errors.push({ message: "La Contraseña o Usuario son Incorrectos" });
        res.redirect('/Sesion')
      }else{
        res.redirect("/Admin");
      }
    }
});


//Ruta Página Admin
router.get('/Admin', (req, res) => {
  res.render('admin.html')
  
})

router.get('/Reportes', (req, res) => {
  res.render('biblioteca.html')
  
})

const reporte = require('../controllers/report.controller')
const reporte2 = require('../controllers/reportR.controller')
const reporte3 = require('../controllers/reportE.controller')
const reporte4 = require('../controllers/reportC.controller')

router.post("/Reportes", async (req, res) => {
  let { fechaI,
    fechaF,
    tipo} = req.body;

  let errors = [];
  
  console.log({
    fechaI,
    fechaF,
    tipo
  });

  const tiempoTranscurrido = Date.now();
  var hoy = new Date(tiempoTranscurrido);
  hoy = hoy.toLocaleDateString('en-CA')

  if(fechaI > hoy || fechaF > hoy){
    alert("Ingrese un rango de fechas válidas (Máximo hasta: " + hoy + " )")
    errors.push({ message: "Fecha fuera del rango" });
    res.redirect('/Reportes')
  }else if(tipo == 'Selecciona'){
    alert("Por favor seleccione el tipo de reporte")
    errors.push({ message: "Seleccione el tipo" });
    res.redirect('/Reportes')
  }else {
    let fechas = {fechaI, fechaF}
    switch(tipo){
      case "1":
        return await reporte.getReportPrestamo(req, res, fechas);
        break;
      
      case "2":
      return await reporte2.getReportRenovacion(req, res, fechas);
        break;

      case "3":
        return await reporte3.getReportEspacio(req, res, fechas);
        break;
      
      case "4":
        return await reporte4.getReportCubiculos(req, res, fechas);
        break;
    }

    return res.redirect("/Inicio");
  }
});


//router.get("/reportes", informe.getInfoCubiculos);
//Gestiòn de Usuarios
router.get('/registrousuarios', (req, res) => {
  res.render('RegisterUser.html');
});

router.post("/registrousuarios", async (req, res) => {
  let { nombre,
    apellido,
    correo, 
    usuario,
    vuelve,
    contraseña} = req.body;

  

  let errors = [];
  
  console.log({
    nombre,
    apellido,
    correo, 
    usuario,
    vuelve,
    contraseña
  });

    if(nombre == "" || apellido == "" || correo == "" || usuario == "" || vuelve == "" || contraseña == ""){
      errors.push({ message: "Espacio Vacio" });
    }
    


    if(errors.length > 0){
      alert("Complete todos los campos")
      //res.render('encuestaRenovacion.html', {errors})

    } else if(vuelve != contraseña) {
      alert("las contraseñas no coinciden, vuelva a ingresarla por favor.")

    }else {

      let sql = `INSERT INTO usuario
      (nombre,
        correo,
        usuario,
        contraseña,
        estado)
        VALUES
      ('${nombre + " " + apellido}',
      '${correo}',
      '${usuario}',
      '${contraseña}',
      '${true}');`
    
      await _pg.executeClient(sql);

      //Envia Informacion a la Base de datos y esperar Respuesta
      alert("¡Usuario registrado con éxito!")


      res.redirect("/registrousuarios");
    }
});

module.exports = router;