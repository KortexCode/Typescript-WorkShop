
import { ProductMemoryService } from "./products/product.memory.service";
import { faker } from "@faker-js/faker";
import { createProductDto } from "./products/product.dto";
//Creamos el objeto con los datos
const objProduct: createProductDto = {
  title: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: parseInt(faker.commerce.price(), 10),
  images: faker.helpers.arrayElements(["oso", "rojo"], 2),
  categoryId: faker.datatype.uuid()
}
//Creamos la instancia
const productService: ProductMemoryService = ProductMemoryService.createInstance([]);
//Consumimos los servicios
productService.create(objProduct);


