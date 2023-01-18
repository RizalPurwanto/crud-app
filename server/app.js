require("dotenv").config(); //tempatkan dotenv paling awal
//console.log(process.env.PORT);

const cors = require("cors"); //cors untuk localstorage
const express = require("express");
const app = express();
const router = require('./routes')
const port = process.env.PORT || 3033; 

const errorHandler = require("./middlewares/errorHandler");


app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use('/', router)
//test


app.use(errorHandler);


// app.listen(port, () => {
//   console.log(`Listening to port ${port}!`);
// });



const server = app.listen(port, () => console.log(`Listening on ${port}`));




// module.exports = app