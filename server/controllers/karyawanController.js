const { table_karyawan, table_jabatan, table_department } = require('../models/index')


async function getAllKaryawan(req, res, next) {
    try {
        console.log("INI GET ALL KARYAWAn")
      const karyawan = await table_karyawan.findAll({
        subQuery: false,
        include:[
            {
                model:table_jabatan,
                include: [
                    {
                        model:table_department
                    }
                ]
               
            }
        ]
      })
     res.status(200).json(karyawan)
    
    } catch (error) {
        console.log(error)
      next(error)
    }
  }

async function addKaryawan (req, res, next) {
    try {
        console.log("INI ADD KARYAWAn", req.body.i)
        const {nama, idJabatan, age, gender, tanggal_lahir, alamat } = req.body
      const newKaryawan = await table_karyawan.create({
        nama: nama,
        id_jabatan:Number(idJabatan),
        age:age,
        gender:gender,
        tanggal_lahir: tanggal_lahir,
        alamat: alamat
      })
     res.status(201).json(newKaryawan)
    
    } catch (error) {
        console.log(error)
      next(error)
    }
  }

  async function editKaryawan (req, res, next) {
    try {
        console.log("INI Edit KARYAWAN")

        const {nama, idJabatan, age, gender, tanggal_lahir, alamat } = req.body

        const {karyawanId } = req.params
      const karyawan = await table_karyawan.findOne({
        where: {
            id: karyawanId
        }
      })
      console.log(karyawan, "INI KARYAWAN")
      if(!karyawan) {
        throw ({
            code: 404,
            name: "NOT_FOUND",
            message: "Karyawan Not found"
        })
      }

      const updatedKaryawan= await karyawan.update({
        nama: nama,
        id_jabatan:Number(idJabatan),
        age:age,
        gender:gender,
        tanggal_lahir: tanggal_lahir,
        alamat: alamat
      })
     res.status(200).json(updatedKaryawan)
    
    } catch (error) {
        console.log(error)
      next(error)
    }
  }

  async function deleteKaryawan (req, res, next) {
    try {
        console.log("INI DELETE KARYAWAN")

        const {nama, idJabatan, age, gender, tanggal_lahir, alamat } = req.body

        const {karyawanId } = req.params
      const karyawan = await table_karyawan.findOne({
        where: {
            id: karyawanId
        }
      })
      console.log(karyawan, "INI KARYAWAN")
      if(!karyawan) {
        throw ({
            code: 404,
            name: "NOT_FOUND",
            message: "Karyawan Not found"
        })
      }

      const updatedKaryawan= await karyawan.update({
        nama: nama,
        id_jabatan:Number(idJabatan),
        age:age,
        gender:gender,
        tanggal_lahir: tanggal_lahir,
        alamat: alamat
      })
     res.status(200).json(updatedKaryawan)
    
    } catch (error) {
        console.log(error)
      next(error)
    }
  }

module.exports={
    getAllKaryawan,
    addKaryawan,
    editKaryawan,
    deleteKaryawan
}