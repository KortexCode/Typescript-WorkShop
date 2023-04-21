import { createProductDto, findProductDto, updateProduct } from "./product.dto";
import { Product } from "./product.model";
import { ProductService } from "../../appAsync/models/product.service.model";
import axios from "axios";

//Configuración de Axios
const axioApi = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1/',
});


class ProductHttpService implements ProductService{
  //única propiedad
  private static instance: ProductHttpService | null = null;
  //Constructor privado
  private constructor(){

  }
  //Métodos
  //Crear única instancia
  static createInstance(){
    if(this.instance === null)
      return this.instance = new ProductHttpService();

    return this.instance;
  }

  //Métodos
  //Mostrar todos los productos
  async showAll(){
    const {data} = await axioApi<Product[]>("products?limit=3&offset=0");
    return  await data;
  }
  //crea productos
  async create(data: createProductDto){
    const resp = await axioApi<Product>("products/", {
      method: "post",
      data: data,
    });
    const product = resp.data
    return product;
  }

  async update(id: Product["id"], changes:updateProduct){
    const {data} = await axioApi(`products/${id}`, {
      method: "put",
      data: changes,
    });
    return data;
  }

  async find(id: Product["id"]){
    const res = await axioApi(`products/${id}`)
    return res.data;
  }
}

export {
  ProductHttpService,
}
