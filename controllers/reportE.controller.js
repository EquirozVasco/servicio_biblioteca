/**
 * Controlador para generar el reporte de promedio de calificaciones de espacios
 */
const excel = require("../services/excel.service");
const fs = require("fs");
const _pg = require("../services/postgress.service");

const getReportEspacio = async (req, res, fechas) => {
    try {
        let sql = ` SELECT iluminacion, temperatura, ruido, limpieza, estadofuncionamiento, 
        instructivosoperacion, senalizacion, tipo_cliente.tipocliente, comentarios, fecha
        FROM espacio inner join tipo_cliente on espacio.idcliente = tipo_cliente.idcliente
        WHERE fecha between '${fechas.fechaI}' and '${fechas.fechaF}';`
        let response_db = await _pg.execute(sql);
        let jsonRows = response_db.rows;
        let rows = [];
        for (const x of jsonRows) {
          rows.push(['Calificación ',x.iluminacion,x.temperatura,x.ruido,x.limpieza,x.estadofuncionamiento,
          x.instructivosoperacion,x.senalizacion,x.tipocliente,x.comentarios,x.fecha]);
        }
        console.log(rows)
        let headers = [
            { name: "Pregunta", totalsRowLabel: 'Promedio:'},
            { name: "Iluminación", totalsRowFunction: 'average'},
            { name: "Temperatura", totalsRowFunction: 'average'},
            { name: "Ruido", totalsRowFunction: 'average' },
            { name: "Limpieza", totalsRowFunction: 'average'},
            { name: "Estado de funcionamiento", totalsRowFunction: 'average'},
            { name: "Instructivos de operacion", totalsRowFunction: 'average'},
            { name: "Señalizacion", totalsRowFunction: 'average'},
            { name: "Tipo de encuestado", filterButton: true},
            { name: "Comentarios"},
            { name: "Fecha", filterButton: true}
        ];
        let buffer = await excel(headers, rows, "Promedio de calificación");
        fs.writeFileSync("./public/temp/ReporteEspacios.xlsx", buffer);
        return res.download("./public/temp/ReporteEspacios.xlsx");
        
    } catch (error) {
        console.error(error);
        return res.send(error);
    }
};

module.exports = { getReportEspacio };