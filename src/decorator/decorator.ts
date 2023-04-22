import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from "class-validator";


export enum AccessType {
  PRIVATE = "private",
  PUBLIC = "public"
}

class Decorator {
  @IsNotEmpty()
  @Length(4, 100)
  name!: string;
  @IsUrl()
  @IsNotEmpty()
  image!: string;
  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(
  async ()=>{
    try {
      const deco = new Decorator();
      const decoName = deco.name = "c";
      deco.image = "https://api.escuelajs.co/api/v1/products"
      await validateOrReject(deco);
      console.log(decoName);
    }
    catch(error:any){
      console.log(error)
      console.log(error[0].constraints)
    }
  }
)()



