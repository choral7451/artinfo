const express = require('express');
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const home = require('./src/routes/index');

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(`${__dirname}/src/public`));

app.use('/', home);

module.exports = app;