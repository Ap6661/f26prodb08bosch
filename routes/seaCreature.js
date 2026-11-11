var express = require('express');
var router = express.Router();

const seaCreature_controllers = require('../controllers/seaCreature');

/* GET home page. */
router.get('/', seaCreature_controllers.seaCreature_view_all_page);

module.exports = router;
