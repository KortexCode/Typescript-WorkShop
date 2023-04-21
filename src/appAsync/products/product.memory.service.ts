import { faker } from "@faker-js/faker";
import { createProductDto, findProductDto, updateProduct } from "./product.dto";
import { Product } from "./product.model";

class ProductMemoryService {
  private products: Product[];

  private constructor(products:Product[]){
    this.products = products;
  }

  createInstance(list:Product[]){
    let productService :ProductMemoryService;
    return productService = new ProductMemoryService(list);
  }

  //Métodos
  //crea productos
  create(data: createProductDto){
    const newProduct =
      {
        ...data,
        id: faker.datatype.uuid(),
        createdAt: faker.date.recent(),
        updateAt: faker.date.future(),
        category: {
          id: data.categoryId,
          name: faker.commerce.department(),
          image: faker.image.imageUrl(),
          createdAt: faker.date.recent(),
          updateAt: faker.date.future(),
        }
      }
      return this.add(newProduct);
  }

  //Función que agrega productos a la lista
  private add(product: Product): Product{
    this.products.push(product);
    return product;
  }

  update(id: number | string, changes:updateProduct): Product[]{
    const newList = this.products.map((item)=>{
      if(item.id === id)
        return {
          ...item,
          ...changes,
        }
      else
        return item;
    });
    this.products = newList;
    return this.products;
  }

  find(find:findProductDto): Product[]{
    const foundList = this.products.filter((item)=>{
        const found = item.id === find.id || item.title === find.title ? true
        : false;
        return found;
    });
    return foundList;
  }
}

let productList : Product[] = [];

export {
  productList,
}


