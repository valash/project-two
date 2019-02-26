const express = require("express");
const hbs = require ("hbs");
const app = express();
app.set("view engine", "hbs");

app.use(require("./routes/index.js"));

app.listen(3005, () => console.log("server is running"));