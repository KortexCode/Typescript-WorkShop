import { Product } from "./product.model";

const products : Product[] = [];

const addProduct = (data: Product) => {
  products.push(data);
  return products;
}

console.log(addProduct(
  {
    title: "sword",
    createdAt: new Date(),
    stock: 4,
  }
))
