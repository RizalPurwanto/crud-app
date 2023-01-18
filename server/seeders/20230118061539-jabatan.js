'use strict';
const fs = require ('fs');
let data = JSON.parse(fs.readFileSync('./data/jabatan.json'))
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    data.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    return await queryInterface.bulkInsert("table_jabatans", data)
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("table_jabatans", null)
  }
};
