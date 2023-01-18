'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table_karyawan extends Model {
    static associate(models) {
      // define association here
      table_karyawan.belongsTo(models.table_jabatan, {
        foreignKey:'id_jabatan'
      })
    }
  }
  table_karyawan.init({
    nama: DataTypes.STRING,
    id_jabatan: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    tanggal_lahir: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'table_karyawan',
  });
  return table_karyawan;
};