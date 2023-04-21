import { BaseModel } from "../base.model";
import { Category } from "../categories/categories.model";

interface Product extends BaseModel{
  title:       string;
  price:       number;
  description: string;
  images:      string[];
  category:    Category;
}

export {
  Product,
}
