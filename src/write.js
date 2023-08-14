const express = require('express');
const fs = require('fs');
const query = express();

const write = query.post('/file', (req, res) => {
    datos = req.body
    let name = 'user: ' + datos.user 
    console.log (name)

    fs.appendFile('./src/info.txt', name + '\n', (err) => {
        if (err) {console.log(err)}
    })

    res.redirect('/')
})

module.exports = write;