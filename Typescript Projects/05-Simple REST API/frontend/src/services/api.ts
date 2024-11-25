import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/products',
});

export const fetchProducts = async () => (await api.get('/')).data;
export const addProduct = async (product: {name: string, price: number, description: string}) => 
    (await api.post('/', product)).data;
export const updateProduct = async (id: number, product: {name: string, price: number}) => 
    (await api.put(`/${id}`, product)).data;
export const deleteProduct = async (id: number) => (await api.delete(`/${id}`)).data;
