/**
 * Controlador para generar el reporte de promedio de calificaciones de reserva de cubículos
 */
const excel = require("../services/excel.service");
const fs = require("fs");
const _pg = require("../services/postgress.service");
 
const getReportCubiculos = async (req, res, fechas) => {
    try {
        let sql = ` SELECT atencionpersonal, procedimientoreserva, tipo_cliente.tipocliente, comentarios, fecha
        FROM reserva_cubiculos inner join tipo_cliente on reserva_cubiculos.idcliente = tipo_cliente.idcliente 
        WHERE fecha between '${fechas.fechaI}' and '${fechas.fechaF}';`
        let response_db = await _pg.execute(sql);
        let jsonRows = response_db.rows;
        let rows = [];
        for (const x of jsonRows) {
          rows.push(['Calificación ',x.atencionpersonal,x.procedimientoreserva,x.tipocliente,x.comentarios,x.fecha])
        }
        console.log(rows)
        let headers = [
        { name: "Pregunta", totalsRowLabel: 'Promedio:'},
        { name: "Atencion del Personal", totalsRowFunction: 'average'},
        { name: "Procedimiento", totalsRowFunction: 'average'},
        { name: "Tipo de encuestado", filterButton: true},
        { name: "Comentarios"},
        { name: "Fecha", filterButton: true}
        ];
        let buffer = await excel(headers, rows, "Promedio de calificación");
        fs.writeFileSync("./public/temp/ReporteReservaCubiculos.xlsx", buffer);
        return res.download("./public/temp/ReporteReservaCubiculos.xlsx");
    } catch (error) {
        console.error(error);
        return res.send(error);
    }
};

module.exports = { getReportCubiculos };