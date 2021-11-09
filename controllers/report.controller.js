/**
 * Controlador para generar el reporte de promedio de calificaciones de prestamos
 */
 const excel = require("../services/excel.service");
 const fs = require("fs");
 const _pg = require("../services/postgress.service");
 
 const getReportPrestamo = async (req, res, fechas) => {
     try {
       let sql = ` SELECT atencionpersonal, procedimientoprestamo, disponibilidad, estadolibros, actualidadrecursos, dotacion, 
       tipo_cliente.tipocliente, comentarios, fecha FROM prestamo inner join tipo_cliente on prestamo.idcliente = tipo_cliente.idcliente 
              WHERE fecha between '${fechas.fechaI}' and '${fechas.fechaF}';`

        let response_db = await _pg.execute(sql);
        let jsonRows = response_db.rows;
        let rows = [];
        for (const x of jsonRows) {
          rows.push(['Calificación ',x.atencionpersonal,x.procedimientoprestamo,x.disponibilidad,x.estadolibros,x.actualidadrecursos,x.dotacion,x.tipocliente,x.comentarios,x.fecha]);
        }

        let headers = [
          { name: "Pregunta", totalsRowLabel: 'Promedio:'},
          { name: "Atencion del Personal", totalsRowFunction: 'average'},
          { name: "Procedimiento", totalsRowFunction: 'average'},
          { name: "Disponibilidad", totalsRowFunction: 'average'},
          { name: "Estado de los libros", totalsRowFunction: 'average'},
          { name: "Actualidad de recursos", totalsRowFunction: 'average'},
          { name: "Dotación", totalsRowFunction: 'average'},
          { name: "Tipo de encuestado", filterButton: true},
          { name: "Comentarios"},
          { name: "Fecha", filterButton: true}
        ];

       let buffer = await excel(headers, rows, "Promedio de calificación");
       fs.writeFileSync("./public/temp/ReportePrestamos.xlsx", buffer);
       return res.download("./public/temp/ReportePrestamos.xlsx");
     } catch (error) {
       console.error(error);
       return res.send(error);
     }
   };



module.exports = { getReportPrestamo };