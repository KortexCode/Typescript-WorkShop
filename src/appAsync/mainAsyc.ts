
import { ProductHttpService } from "./products/product.http.service";



const productService: ProductHttpService = ProductHttpService.createInstance();

async function get(){
  /* console.log((await productService.showAll())); */
  /* console.log(await productService.find(6)) */
  console.log(await productService.update(6, {
    title: "chikorita",
  }))
}
get();


/* async function find(){
  console.log("find", await );

}
find() */

