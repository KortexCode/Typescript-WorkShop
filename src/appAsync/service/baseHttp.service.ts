import axios from "axios";
import { Product } from "../models/product.model";
import { Category } from "../models/categories.model";
import { updateProduct } from "../products/product.dto";

//Configuración de Axios
const axioApi = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1/',
});

const URL = "products?limit=3&offset=0";
const URL1 = "categories/1";

export class BaseHttpService<T> {
  /* data: T[] = []; */

  constructor(
    private url: string
  ){}

  async getAll(){
    const {data} = await axioApi<T>(this.url);
    return data;
  }
  async update<TM, TDto>(id: TM, changes: TDto){
    const {data} = await axioApi(`products/${id}`, {
      method: "put",
      data: changes,
    });
    return data;
  }
}

const service1 = new BaseHttpService<Product>(URL);
const service2 = new BaseHttpService<Category>(URL1);


async function Response(){
  const res = await service1.update<Product["id"], updateProduct>(3, {
    title: "Megaman X Toy"
  });
  console.log(res);
}

Response();
