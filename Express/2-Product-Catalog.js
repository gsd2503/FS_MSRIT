import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
let products = [
    {id:1, name:'watch', price:2000, stock:"available"},
    {id:2, name:'trimmer', price:1500, stock:"unavailable"}

];

app.get('/products',(req,res)=>{
    res.send(products);
});

app.post('/products',(req,res)=>{
    const {name,price,stock}=req.body;
    const newProduct = {
        id:products.length + 1,
        name,
        price,
        stock
    };

    products.push(newProduct);
    res.status(201).send(`product added: ${JSON.stringify(newProduct)}`);
});

app.put('/id',(req,res)=>{
    const productid = parseInt(req.params.id);
    const {name,price,stock} = req.body;
    const product = products.find(u=>u.id === productid);

    if(!productid){
        return res.sendStatus(404).send("product not found");

    }

    products.name = name || products.name;
    products.price = price || products.price;
    products.stock = stock || products.stock;

    res.send(`product updated : ${JSON.stringify(product)}`);
});

app.delete('/products/:id',(req,res)=>{
    const productid = parseInt(req.params.id);
    const index = products.findIndex(u => u.id === productid);

    if(index === -1){
        return res.sendStatus(404).send("product not found");
    }

    const deleteProduct = products.splice(index,1);
    res.send(`product deleted: ${JSON.stringify(deleteProduct(0))}`);
    
});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
