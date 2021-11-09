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

const execute2 = async (sql) =>{
  const conexion = mysql.createConnection({
      host: 'localhost',
      database: 'bibliotecausuarios',
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
  var result
  const res = conexion.query(sql, function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0]);
    result = rows[0]
  });
  console.log("Probando",result)
  conexion.end();
  return res
};
 
 module.exports = {execute, execute2};
 