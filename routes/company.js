var express = require('express');
var router = express.Router();
const companyController = require('../controllers/companyController')
const passportJWT = require('../middleware/passportJWT')
const checkAdmin = require('../middleware/checkAdmin')

/* GET users listing. */
router.get('/',[passportJWT.isLogin,checkAdmin.isAdmin],companyController.index );

module.exports = router;
