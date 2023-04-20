import { Product } from "./product.model";

interface createProductDto extends
  Omit<Product, "id" | "createdAt" | "updateAt" | "category"> {
    categoryId: string;
}

interface updateProduct extends Partial<createProductDto>{};

interface findProductDto extends Readonly<Partial<Omit<Product, "tags">>>{
	readonly tags?: ReadonlyArray<string>;
};

export {
  createProductDto,
  updateProduct,
  findProductDto,
}


