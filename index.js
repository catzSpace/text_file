const express = require('express');
const app = express();
const path = require('path');
const write = require('./src/write');

app.set('port', 4000)
app.listen(app.get('port'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './src/index.html'))
})

app.use(write);

