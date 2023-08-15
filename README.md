# text_file

creator: caztspace

thx for you coding!

______
a web site to save usernames in txt files, allows you to download this log and delete it when you see fit.

usinf "fs" library for write, delete and update txt file.

```lua
npm install fs

const fs = require('fs');
```

```lua
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
```
![Captura de pantalla 2023-08-15 121443](https://github.com/catzSpace/text_file/assets/133279982/117eb6cd-c468-4796-8812-efe1b074ef5c)
