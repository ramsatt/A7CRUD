import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //base api url
  public url = 'http://localhost/web_api/';
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.url + 'view.php');
  }

  getProductDetails(id){
    return this.http.get(this.url + 'view_one.php?id=' + id);
  }

  createProduct(data){
    return this.http.post(this.url + 'create.php', data);
  }

  updateProduct(data){
    return this.http.post(this.url + 'update.php', data);
  }

  deleteProduct(id){
    return this.http.get(this.url + 'delete.php?id=' + id);
  }
}
