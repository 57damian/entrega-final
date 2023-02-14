const express = require('express')
const { use } = require('./router/products.router')
const { use } = require('./router/carts.router')
const productsRouter = require ('./router/products.router')
const cartsRouter = require ('./router/carts.router')
const multer = require ('multer')

const app = express()




app.listen(8080, () => console.log('server up'))



// function ejecutaAlgo (req, res, next){
//     if(false) res.send('error')
//     else next()
// }
app.use(express.json())
app.use(express.urlencoded({extends: true}))
app.use(express.static('public'))

app.use('/api/products',  productsRouter)
app.use('/api/carts',  cartsRouter)

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