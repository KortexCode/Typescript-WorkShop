import { Category } from "../models/categories.model";


interface createCategoryDto extends
  Omit<Category, "id" | "createdAt" | "updateAt" | "category"> {
    categoryId: string;
}
