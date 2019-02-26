const express = require("express");
const hbs = require ("hbs");
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require("method-override");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "hbs");

app.use(require("../routes/index"));

app.listen(3005, () => console.log("server is running"));