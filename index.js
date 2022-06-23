var http = require('http')
const express = require('express')
const app = express()



app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/', require('./router')) 


http.createServer(app).listen(4000, 'localhost', ()=>{
    console.log('ouvindo server 4000')
})