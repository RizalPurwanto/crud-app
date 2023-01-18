const express = require('express')
const router = express.Router()

const karyawan = require('./karyawan')




router.use('/karyawan', karyawan)

module.exports = router