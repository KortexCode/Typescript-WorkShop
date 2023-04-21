import { Product } from "./product.model";

interface createProductDto extends
  Omit<Product, "id" | "createdAt" | "updateAt" | "category"> {
    categoryId: string;
}

interface updateProduct extends Partial<createProductDto>{};

interface findProductDto extends Readonly<Partial<Product>>{};

export {
  createProductDto,
  updateProduct,
  findProductDto,
}


