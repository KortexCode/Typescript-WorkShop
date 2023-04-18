import { Product } from "./product.model";

const productList : Product[] = [];

const addProduct = (data: Product) => {
  productList.push(data);
  return productList;
}

addProduct(
  {
    title: "sword",
    id: "1",
    createdAt: new Date(),
    updateAt: new Date(),
    stock: 4,
    category: {
      id: 1,
      createdAt: new Date(),
      updateAt: new Date(),
      name: "Weapon"
    }
  }
);

export {
  productList,
  addProduct
}
