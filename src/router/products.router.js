const {Router} = require('express')
const fs = require('fs');

const router = Router()
const producst = []

createId = () => {
    const countProducts = this.products.length;
    if (countProducts === 0){
        return 1;
    }else{
        return (this.products[countProducts - 1].id) + 1;
    }
}

router.get('/', (req, res) =>{
    res.send('./src/products.json')
})
router.get('/:id', (req, res) =>{
    const products = products.find((p) => p.id === parseInt(req.params.id));
    if (!producst) {
      return res.status(404).send({ error: "El producto no ha sido encontrado" });
    }
    return res.json(products);
}) 

router.post('/', (req, res) =>{
    addProducts = (title, description, price, thumbnail, code, stock) => {
        this.getProducts();
        if (!title || !description || !price || !thumbnail || !code || !stock){
            console.error(`No se puede agregar el producto ${title}. Faltan datos.`);
            return
        }else{
            if (this.products.find(product => product.code === code)){
                console.error(`No se puede agregar el producto ${title}. El código ya existe.`)
                return
            }else{
                const id = this.createId();
                this.products.push({
                    id,
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                })
                fs.writeFileSync('./src/products.json', JSON.stringify(this.products, null, 2));
                console.log('¡Producto agregado!');
            }
        }
    }
    addProducts(req.body)
    res.status(201).json({ status: "success", message: "products created!"})
})
router.put('/:id', (req, res) =>{
    updateProduct = (updateProduct) => {
        this.products = this.getProducts();
        let index = this.products.indexOf(this.products.find((product)=>product.id == updateProduct.id));
        if (index == -1) {
            console.log('No se pudo actualizar el producto');
        }else{
            this.products[index] = updateProduct;
            fs.writeFileSync('./src/products.json', JSON.stringify(this.products, null, 2));
            console.log('Producto actualizado existosamente.');
        }
    }

    updateProducts(req.body)
    res.status(201).json({ status: "success", message: "products updated!"})

})
router.delete('/:id', (req, res) =>{
    deleteProduct = (id) => {
        this.products = this.getProducts();
        let index = this.products.indexOf(this.products.find((product)=>product.id == id));
        if (index == -1){
            console.log('No se pudo eliminar el producto');
        }else{
            this.products.splice(index, 1);
            fs.writeFileSync('./src/products.json', JSON.stringify(this.products, null, 2));
            console.log('Producto eliminado existosamente');
        }
    }

    deleteProducts(req.body)
    res.status(201).json({ status: "success", message: "products updated!"})
})

module.exports =router