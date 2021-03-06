const express =  require('express');
const  router =  express.Router();
const path =  require('path');

const controllers =  require('../controllers/form.controller');

router.get('/', controllers.login);
router.get('/home', controllers.index);
router.get('/admin', controllers.admin);
module.exports = router;