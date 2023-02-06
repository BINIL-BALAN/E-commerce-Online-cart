import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
searchKey:string=''
  constructor(private api:HttpClient) { }

  getAllProducts(){
    return this.api.get('http://localhost:3000/Allproducts')
  }

  viewProduct(id:string){
    return this.api.get('http://localhost:3000/viewProduct/'+id)
  }
}
