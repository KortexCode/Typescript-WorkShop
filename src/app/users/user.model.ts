import { BaseModel } from "../base.model";

enum ROLES {
  ADMIN = "Admin",
  SELLER = "Seller",
  CUSTOMER = "Customer"
}

interface User extends BaseModel{
  username: string;
  role: ROLES;
}

const chikoritaUser: User = {
  id: 1,
  createdAt: new Date(),
  updateAt: new Date(),
  username: "Chikorita",
  role: ROLES.SELLER,
}

export {
  User,
  chikoritaUser,
}
