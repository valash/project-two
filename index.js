const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'hbs');

app.use(require('./routes/index'));

app.listen(3005, () => console.log('LETS GO'));
