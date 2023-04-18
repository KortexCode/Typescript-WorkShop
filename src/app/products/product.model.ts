import { BaseModel } from "../base.model";
import { Category } from "../categories/categories.model";

type Sizes = 'S' | 'M' | 'L' | 'XL';

interface Product extends BaseModel{
  title: string;
  stock: number;
  size?: Sizes;
  category: Category;
}

export {
  Product,
}
