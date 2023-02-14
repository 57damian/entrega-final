const {Router} = require('express')
const fs = require('fs');

const router = Router()
const carts = []

createId = () => {
    const countCarts = this.carts.length;
    if (countCarts === 0){
        return 1;
    }else{
        return (this.carts[countProducts - 1].id) + 1;
    }
}

router.get('/', (req, res) =>{
    res.send('./src/carts.json')
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