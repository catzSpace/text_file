const express = require('express');
const app = express();
const path = require('path');
const write = require('./src/write');
const download = require('./src/donwload');
const clear = require('./src/clear');

app.set('port', 4000)
app.listen(app.get('port'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.use(download);
app.use(write);
app.use(clear);
