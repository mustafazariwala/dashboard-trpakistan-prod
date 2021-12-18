const express = require("express");
// const compression = require('compression')
// const bodyParser = require("body-parser");
const cors = require('cors')
const path = require('path')
const mongoose = require("mongoose");
require('dotenv').config()
const businessMuwasaatRoutes = require('./routes/businessMuwasaats')
const resourcesRoutes = require('./routes/resources')

const app = express();
app.use(cors())
// app.use(enforce.HTTPS({ trustProtoHeader: true }))
// app.use(compression())

mongoose
  .connect(
    process.env.DB_NAME,
    { 
      useNewUrlParser: true ,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log(error, "Connection failed!");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
// app.use("/uploads", express.static(path.join(__dirname, "uploads")))
app.use("/", express.static(path.join(__dirname, "angular")))
// app.use("/", express.static(path.join(__dirname, "static")))




app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "*"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "*"
  );
  next();
});

app.use("/api/businessmuwasaat", businessMuwasaatRoutes)
app.use("/api/resources", resourcesRoutes)
app.use((req,res,next)=> {
  res.sendFile(path.join(__dirname ,"angular", "index.html"))
})


module.exports = app;