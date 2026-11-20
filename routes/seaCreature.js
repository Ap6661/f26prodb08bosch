var express = require('express');
var router = express.Router();

const seaCreature_controllers = require('../controllers/seaCreature');

/* GET home page. */
router.get('/', seaCreature_controllers.seaCreature_view_all_page);

/* GET detail sea creature page */
router.get('/detail', seaCreature_controllers.seaCreature_view_one_page);

/* GET sea creature create page */
router.get('/create', seaCreature_controllers.seaCreature_create_page);

/* GET create update page */
router.get('/update', seaCreature_controllers.seaCreature_update_page);

/* GET delete page */
router.get('/delete', seaCreature_controllers.seaCreature_delete_page);

module.exports = router;
