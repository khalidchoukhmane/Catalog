import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products! : Array<any>;

  constructor() {
    this.products =[
      {id:1, name:"computer", price:5600},
      {id:2, name:"Printer", price:5700},
      {id:3, name:"Smart Phone", price:5800}
    ];
  }

  public getAllProducts(): Observable<Array<any>>{
    let rnd = Math.random();
    if(rnd < 0.1) return throwError(()=>new Error("Internet connexion error"));
    else return of(this.products);
  }
}
