import { BaseHttpService } from "./baseHttp.service";

class ProductCRUDService {
  private url = "products?limit=3&offset=0";
  private http = new BaseHttpService(this.url);

  async update<TM, TDto>(id: TM, changes: TDto){
    return this.http.update(id, changes);
  }
}
