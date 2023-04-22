
import { ProductHttpService } from "./service/product.http.service";



const productService: ProductHttpService = ProductHttpService.createInstance();

async function get(){
  try{
    /* console.log((await productService.showAll())); */

     console.log(await productService.update(7, {
     title: "chikorita",
    }))
    console.log(await productService.find(7))

  }
  catch(e){
    console.log("hola")
    console.error(e);
  }
}
get();


/* async function find(){
  console.log("find", await );

}
find() */

