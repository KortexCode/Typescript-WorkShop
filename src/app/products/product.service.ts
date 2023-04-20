import { faker } from "@faker-js/faker";
import { createProductDto, findProductDto, updateProduct } from "./product.dto";
import { Product } from "./product.model";

let productList : Product[] = [];
//Función que agrega productos a la lista
const addProduct = (data: createProductDto) => {
  productList.push(
  {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updateAt: faker.date.future(),
    category: {
      id: data.categoryId,
      createdAt: faker.date.recent(),
      updateAt: faker.date.future(),
      name: faker.commerce.department(),
    }

  });
  return productList;
}
//Función que actuliza los datos del productList
const updateProduct = (id: number | string, changes:updateProduct): Product[] =>  {
  const newList = productList.map((item)=>{
    if(item.id === id)
      return {
        ...item,
        ...changes,
      }
    else
      return item;
  });
  productList = newList;
  return productList;
}
//Función para encontrar un producto específico
const findProducts = (find:findProductDto): Product[] =>{
  const foundList = productList.filter((item)=>{
      const found = item.id === find.id || item.title === find.title ? true
      : false;
      return found;
  });
  return foundList;
}

export {
  productList,
  addProduct,
  updateProduct,
  findProducts,
}


