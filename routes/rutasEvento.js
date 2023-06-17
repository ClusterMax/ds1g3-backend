const express = require('express');
const { agregarEvento, editarEvento, obtenerEventosC, anularInscipcionEvento } = require('../controllers/controladorEvento.js');
const verificarAutenticacion = require('../middleware/verificarAutenticacion.js');

const routerAgregarEvento = express.Router();
const routerEditarEvento = express.Router();
const routerObtenerEventosC = express.Router();
const routerAnularInscripcionEvento =express.Router();


routerEditarEvento.put('/evento/editar/:codigo_evento', verificarAutenticacion, editarEvento);
routerAgregarEvento.post('/evento/agregar', verificarAutenticacion, agregarEvento);
routerObtenerEventosC.get('/evento/obtenerC', verificarAutenticacion, obtenerEventosC);
routerAnularInscripcionEvento.delete('/evento/anular-inscripcion', verificarAutenticacion, anularInscipcionEvento);



module.exports = {
  routerAgregarEvento: routerAgregarEvento,
  routerEditarEvento: routerEditarEvento,
  routerObtenerEventosC: routerObtenerEventosC,
  routerAnularInscripcionEvento: routerAnularInscripcionEvento
};

