'use strict';
const fs = require ('fs');
let data = JSON.parse(fs.readFileSync('./data/karyawan.json'))
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    data.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    return await queryInterface.bulkInsert("table_karyawans", data)
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("table_karyawans", null)
  }
};
