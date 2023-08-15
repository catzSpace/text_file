const express = require('express');
const fs = require('fs');
const query = express();

const write = query.post('/file', (req, res) => {
    
    datos = req.body
    let name = 'user: ' + datos.user 

    if (datos.user == ''){
        console.log('empty')
        res.redirect('/');
    } else {
        fs.appendFile('./src/info.txt', '\n' + name, (err) => {
            if (err) {console.log(err)}
    
            const users = fs.readFileSync('./src/info.txt', 'utf-8')
            const lines = users.split('\n')
            for (const line of lines){
                console.log(line)
            }
            res.redirect('/');
        })
    }
    
})

module.exports = write;