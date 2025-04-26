var pool = require('./bd');
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password) {
  try {
    var query = 'SELECT * FROM usuarios WHERE usuario = ? AND password = ? LIMIT 1';
    var rows = await pool.query(query, [user, md5(password)]);

    return rows.length > 0 ? rows[0] : null; // Si el usuario es encontrado, lo retornamos
  } catch (error) {
    console.log('Error en la consulta:', error);
    return null; // En caso de error, devolvemos null
  }
}

module.exports = { getUserByUsernameAndPassword };
