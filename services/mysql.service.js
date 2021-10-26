/**
 * Conexión con la base de datos
 */
const mysql = require('mysql');

const execute = async (sql) =>{
    const conexion = mysql.createConnection({
        host: 'localhost',
        database: 'encuestas',
        user: 'root',
        password: '',
      });
    conexion.connect(function(error) {
      if (error) {
        throw error
      }else{
        console.log('Conexión exitosa')
      }
    });
    const res = conexion.query(sql);
    conexion.end();
    return res;
};
 
 module.exports = {execute};
 