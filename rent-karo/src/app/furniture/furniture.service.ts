// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Project
import { Furniture } from "./furniture.model";

// RXJS
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  constructor(private http: HttpClient) { }

  getFurniture() {
    return this.http.get('./assets/furniture.json').
      pipe(
        map((data: Furniture[]) => { return data; })
      )
  }

}
