let express = require('express')

const app = express()

app.get('/', function(req , res) {
    let file =path.resolve('vistas/index.html')

    res.sendFile(file)
},

app.use(express.static('public'))

)

const path = require('path')

app.listen(3000)