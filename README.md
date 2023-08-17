# Save users to txt file

creator: caztspace

thx for you coding!

_____
# How to use

download the project, install the corresponding dependencies, run the following command:

```lua
npm run dev
```

And open in your browser the localhost:4000.
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
    let pass = 'password: ' + datos.pass

    if (datos.user == '' || datos.pass == ''){
        console.log('void');
    } else {
        fs.appendFile('./src/info.txt', '\n' + name + '\n' + pass + '\n', (err) => {
            if (err) {
                console.log(err);
            }

            const users = fs.readFileSync('./src/info.txt', 'utf-8')
            const lines = users.split('\n')
            for (const line of lines){
                console.log(line);
            }
            res.redirect('/');
        })
    }
    
})

module.exports = write;
```

# Normal:

![Captura de pantalla 2023-08-16 210732](https://github.com/catzSpace/text_file/assets/133279982/86bb2957-ff79-41cd-928b-e9b5f7ae1f3e)

# If the fields are empty:

![Captura de pantalla 2023-08-16 210750](https://github.com/catzSpace/text_file/assets/133279982/5eeed57d-f39b-4a4a-861a-2e9d308c1436)
