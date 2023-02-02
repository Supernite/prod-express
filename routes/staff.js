var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')
const { body } = require('express-validator')


/* GET users listing. */
router.get('/', staffController.index);

/* http://localhost:3000/staff/63942adf46827b5300dfde78 */
router.get('/:id', staffController.show);
router.delete('/:id', staffController.destroy);
router.put('/:id', staffController.update);

router.post('/',[
    body('name').not().isEmpty().withMessage("กรุณาป้อนชื่อข้อมูลด้วย"),
    body('salary').not().isEmpty().withMessage("กรุณาระบุเงินเดือน").isInt().withMessage("กรุณาระบุเงินเดือนเป็นตัวเลข")
], staffController.insert );

module.exports = router;
