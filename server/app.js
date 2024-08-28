const routes = require('./routes/v1')

const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', routes);


module.exports = app;