import { createProductDto, updateProduct } from "../products/product.dto";
import { Product } from "./product.model";

export interface ProductService {
  showAll(): Product[] | Promise<Product[]>;
  update(id: Product['id'], changes: updateProduct): Product | null | Promise<Product>;
  create(dto: createProductDto): Product | Promise<Product>;
  find(id: Product["id"]): Product | undefined | Promise<Product>;
}
