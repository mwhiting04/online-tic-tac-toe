const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3080;

app.use(bodyParser.urlencoded({ extended: true }));

const staticPath = '/client';
app.use(express.static(path.join(__dirname, staticPath)));

require('./routes/api')(app);




app.listen(PORT, () => console.log('server is running!'));

