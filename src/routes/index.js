const {Router}= require('express');
const router = Router();

const piCtrl = require('../controllers/index.controllers')


router
    .get('/',piCtrl.getHome)
    .get('/api/pi/dependencias', piCtrl.getDependencias)


module.exports = router;
