interface Product {
    name: string, 
    stock:number, 
    price:number, 
    description: string
    readonly id: string;
}

type GetDataType = (product : Product) => void;

const getData : GetDataType = (product) => {
    console.log(product);
}

const productOne : Product = {
    name : "Mackbook",
    stock : 16,
    price: 180000,
    description: "Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels",
    id: "product1"
}

getData(productOne);

// Never Type

const errorHandler = () : never => {
    throw new Error();
}