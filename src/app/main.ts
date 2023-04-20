import { Product, Sizes } from "./products/product.model";
import { addProduct, findProducts, productList, updateProduct } from "./products/product.service";
import { faker } from '@faker-js/faker';

const sizes : Sizes[] = ['S', 'M', 'L', 'XL'];

function getRandomInt(max: number) : number{
  return Math.floor(Math.random() * max);
}

for (let index = 0; index < 2; index++) {

  const sizeSelected: number = getRandomInt(4);
  addProduct(
    {
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseInt(faker.commerce.price(), 10),
      color: faker.color.rgb({ prefix: '#' }),
      image: faker.image.imageUrl(),
      isNew: faker.datatype.boolean(),
      tags: ["cajita", "conejo"],
      size: sizes[sizeSelected],
      stock: faker.datatype.number({min: 1, max: 10}),
      categoryId: faker.datatype.uuid()
    }
  );
}
console.log(productList);


const productToUpdate: Product = productList[0];
updateProduct(productToUpdate.id, {title: "chikorita"});

const foundProduct : Product[] = findProducts({id:productToUpdate.id, title: productToUpdate.title});


console.log(productList);
console.log(foundProduct)
