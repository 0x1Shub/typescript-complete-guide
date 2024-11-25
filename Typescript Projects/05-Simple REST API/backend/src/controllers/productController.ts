import { Product } from './../models/Product';
import { Request, Response } from 'express';

let products : Product[] = [];

export const getProducts = (req: Request, res: Response) => {
    res.json(products);
}

export const addProduct = (req: Request, res: Response) => {
    const newProduct: Product = {...req.body, id:Date.now()};
    products.push(newProduct);
    res.status(201).json(newProduct)
}

export const updateProduct = (req: Request, res: Response) => {
    const {id} =  req.params;
    const updatedProduct = req.body;

    products = products.map((product) => (
        product.id === +id ? {...product, ...updatedProduct} : product
    ));

    res.json({message: "Product updated successfully", updatedProduct})
}

export const deleteProduct = (req: Request, res: Response) => {
    const {id} = req.params;
    products = products.filter((product) => product.id !== +id);
    res.json({message: "Product Deleted"});
}