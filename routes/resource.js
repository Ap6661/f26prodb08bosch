var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api')
var seaCreature_controller = require('../controllers/seaCreature')

router.get('/', api_controller.api);

router.post('/seaCreatures', seaCreature_controller.seaCreature_create_post);

router.delete('/seaCreatures/:id', seaCreature_controller.seaCreature_delete);

router.put('/seaCreatures/:id', seaCreature_controller.seaCreature_update_put);

router.get('/seaCreatures/:id', seaCreature_controller.seaCreature_detail);

router.get('/seaCreatures', seaCreature_controller.seaCreature_list);

module.exports = router;
