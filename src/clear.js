const express = require('express');
const query = express();
const fs = require('fs');

const clear = query.get('/clear', (req, res) => {
    fs.truncate('./src/info.txt', 0, () => {
        console.log('done')
    })
    res.redirect('/')
})

module.exports = clear;