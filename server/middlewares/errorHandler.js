const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    

    case "NOT_FOUND":
      res.status(err.code).json({ message: err.message });
      break;


    case "SequelizeUniqueConstraintError":
      const errUnique = err.errors.map((err) => err.message)
      res.status(400).json({ message: errUnique })
      break;

    case "SequelizeDatabaseError":

      res.status(400).json({ message: err })
      break;

    case "SequelizeValidationError":
      const errValid = err.errors.map((err) => err.message)
      res.status(400).json({ message: errValid })
      break;

    default:
      //console.log(err, "INI ERROR INTERNAL SERVER")
      res.status(500).json({ message: "internal server error" });
      break;
  }
};

module.exports = errorHandler
