const express = require('express');
const fs = require('fs');
const query = express();

const write = query.post('/file', (req, res) => {
    
    datos = req.body
    let name = 'user: ' + datos.user 
    let pass = 'password: ' + datos.pass

    if (datos.user == '' || datos.pass == ''){
        console.log('void')
    } else {
        fs.appendFile('./src/info.txt', '\n' + name + '\n' + pass + '\n', (err) => {
            if (err) {
                console.log(err)
            }

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