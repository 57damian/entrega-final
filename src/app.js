const express = require('express')
const { use } = require('./router/users.router')
const usersRouter = require ('./router/users.router')
const multer = require ('multer')

const app = express()

let users = []

app.listen(8080, () => console.log('server up'))

/* app.get('/', (req,res) =>{
    res.send('hola mundo')
}) */

function ejecutaAlgo (req, res, next){
    if(false) res.send('error')
    else next()
}
app.use(express.json())
app.use(express.urlencoded({extends: true}))
app.use(express.static('public'))

app.use('/users', ejecutaAlgo, usersRouter)

const storage = multer.diskStorage({
    destination: function(req, res, cb){
        cb(null,'public/')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

const uploader = multer({storage})

app.post('/', uploader.single('file'), (res, req) =>{
    res.send('file uploaded')
})