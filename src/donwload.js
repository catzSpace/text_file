const express = require('express');
const query = express();

const download = query.get('/download', (req, res) => {
    res.download('./src/info.txt');
})

module.exports = download;