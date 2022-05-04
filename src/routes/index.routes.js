const express =  require('express');
const  router =  express.Router();
const path =  require('path');

const controllers =  require('../controllers/form.controller');

router.get('/', controllers.index);

module.exports = router;