var express = require('express');
var router = express.Router();

// Middleware para verificar si el usuario está logueado
function isAuthenticated(req, res, next) {
  if (req.session.id_usuario) {
    return next(); // Si está logueado, continuar con la ruta
  } else {
    res.redirect('/admin'); // Si no está logueado, redirigir al login
  }
}

/* GET Novedades page. */
router.get('/', isAuthenticated, function(req, res, next) {
  res.render('admin/novedades', { 
    layout: 'admin/layout'
  });
});

module.exports = router;
