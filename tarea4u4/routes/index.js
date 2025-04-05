var express = require('express');
var router = express.Router();



router.get('/saludo/:nombre', function (req, res) {
  const nombre = req.params.nombre;
  res.render('saludo', {
    titulo: 'Bienvenidos a mi tarea de ruta',
    nombre
  });
});


module.exports = router;
