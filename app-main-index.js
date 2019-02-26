const express = require("express");
const hbs = require ("hbs");
const app = express();
// const parser = require("body-parser");
// const methodOverride = require("method-override");

app.set("view engine", "hbs");

app.use(require("./routes/index"));

app.listen(3005, () => console.log("server is running"));