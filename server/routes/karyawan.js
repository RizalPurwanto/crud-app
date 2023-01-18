const Controller = require ('../controllers/karyawanController')
const express = require("express")
const router = express.Router()

router.get('/', Controller.getAllKaryawan)
router.post('/add', Controller.addKaryawan)
router.put('/edit/:karyawanId', Controller.editKaryawan)

module.exports = router