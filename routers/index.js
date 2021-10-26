const express = require("express");
const router = express.Router();
const _mysql =require('../services/mysql.service');


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
  
    let errors = [];
    
    console.log({
        atencionp, 
        procesop, 
        disponibilidad,
        estadoLibros,
        actualidad,
        dotacion,
        comentarios,
        tipo
    });
  
      if(!atencionp || !procesop || !disponibilidad || !estadoLibros || !actualidad || !dotacion || !tipo){
        errors.push({ message: "Espacio Vacio" });
      }

  
      if(errors.length > 0){
        res.render('encuestaPrestamo.html', {errors})
      } else {

        let sql = `INSERT INTO prestamo
        (atencionPersonal,
        procedimientoPrestamo,
        disponibilidad,
        estadoLibros,
        actualidadRecursos,
        dotacion,
        idCliente,
        comentarios)
        VALUES
        ('${atencionp}',
        '${procesop}',
        '${disponibilidad}',
        '${estadoLibros}',
        '${actualidad}',
        '${dotacion}',
        '${tipo}',
        '${comentarios}');`
      
        await _mysql.execute(sql);
  
        //Envia Informacion a la Base de datos y esperar Respuesta

        res.redirect("/Prestamo");
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
        estadoFuncionamiento,
        instructivosOperacion,
        señalizacion,
        idCliente,
        comentarios)
      VALUES
      ('${iluminacion}',
      '${temperatura}',
      '${ruido}',
      '${limpieza}',
      '${estado}',
      '${instructivos}',
      '${seniales}',
      '${tipo}',
      '${comentarios}');`
    
      await _mysql.execute(sql);

      //Envia Informacion a la Base de datos y esperar Respuesta

      res.redirect("/Espacios");
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

  let errors = [];
  
  console.log({
    atencionr,
    procesor,
    horario, 
    comentarios,
    tipo
  });

    if(!atencionr || !procesor || !horario || !tipo){
      errors.push({ message: "Espacio Vacio" });
    }


    if(errors.length > 0){
      res.render('encuestaRenovacion.html', {errors})
    } else {

      let sql = `INSERT INTO renovacion
      (atencionPersonal,
        procedimientoRenovacion,
        horariosAtencion,
        idClienteF,
        comentarios)
      VALUES
      ('${atencionr}',
      '${procesor}',
      '${horario}',
      '${tipo}',
      '${comentarios}');`
    
      await _mysql.execute(sql);

      //Envia Informacion a la Base de datos y esperar Respuesta

      res.redirect("/Renovaciones");
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

  let errors = [];
  
  console.log({
    atencion,
    proceso,
    comentarios, 
    tipo 
  });

    if(!atencion || !proceso || !tipo){
      errors.push({ message: "Espacio Vacio" });
    }


    if(errors.length > 0){
      res.render('encuestaCubiculos.html', {errors})
    } else {

      let sql = `INSERT INTO reserva_cubiculos
      (atencionPersonal,
        procedimientoReserva,
        idClienteF,
        comentarios)
      VALUES
      ('${atencion}',
      '${proceso}',
      '${tipo}',
      '${comentarios}');`
    
      await _mysql.execute(sql);

      //Envia Informacion a la Base de datos y esperar Respuesta

      res.redirect("/Cubiculos");
    }
});

module.exports = router;