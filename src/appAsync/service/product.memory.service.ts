import { faker } from "@faker-js/faker";
import { createProductDto, findProductDto, updateProduct } from "./product.dto";
import { Product } from "./product.model";

class ProductMemoryService {
  private products: Product[];
  private static instance: ProductMemoryService | null = null;

  private constructor(products:Product[]){
    this.products = products;

  }

  static createInstance(list:Product[]){
    if(this.instance === null)
      return this.instance = new ProductMemoryService(list);

    return this.instance;
  }

  //Métodos
  showList():Product[]{
    return this.products;
  }
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

export {
  ProductMemoryService,
}


