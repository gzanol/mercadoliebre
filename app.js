const express = require('express')
const app = express()
const port = 3030
const path = require('path')



app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'views/index.html'))
})
app.get('/login', function(request, response) {
    response.sendFile(path.join(__dirname, 'views/login.html'))
})
app.get('/registro', function(request, response) {
    response.sendFile(path.join(__dirname, 'views/registro.html'))
})

app.use(express.static('public'))
app.use(express.static('views'))

app.get('*', function(request, response) {
    response.send('NOT FOUND', 404)
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})
