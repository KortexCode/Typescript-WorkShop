import { BaseModel } from "../base.model";
import { Product } from "../products/product.model";
import { productList } from "../products/product.service";
import { User, chikoritaUser } from "../users/user.model";

interface Order extends BaseModel{
  product: Product[];
  user: User;
}

export const order: Order = {
  id: 1,
  createdAt: new Date(),
  updateAt: new Date(),
  product: productList,
  user: chikoritaUser,
}


