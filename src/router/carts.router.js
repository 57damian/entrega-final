const {Router} = require('express')

const router = Router()

router.get('/', (req, res) =>{
    res.send('get')
})
router.get('/:id', (req, res) =>{
   res.send('get by id')
}) 

router.post('/', (req, res) =>{
    res.send('post by id')
})
router.put('/:id', (req, res) =>{
    res.send('put by id')
})
router.delete('/:id', (req, res) =>{
    res.send('delete by id')
})

module.exports =router