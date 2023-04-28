import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorias, Productos } from '../models/producto-cat.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoCategoriaService {

  constructor(private http: HttpClient) { }

  api = "https://simplecrud-prod-cat-production.up.railway.app/api"

  //GET 
  getAllProductos() {
    return this.http.get<Productos[]>(
      `${this.api}/productos/all`
    )}

  getAllByCat(idCategoria: number){ 
    return this.http.get<Productos[]>(
      `${this.api}/productos/idCat/${idCategoria}`
    )}

  getAllCategoria(){
    return this.http.get<Categorias[]>(
      `${this.api}/categorias/all`
    )}

  //POST
  addProducto(newProducto: Productos){ 
    return this.http.post<Productos>(
      `${this.api}/productos/create`,
      newProducto
    )
  }

  addCategoria(newCategoria: Categorias){ 
    return this.http
    .post<Categorias>(
      `${this.api}/categorias/create`,
      newCategoria
    )
  }

  //PUT
  editProducto(eProducto: Productos){ 
    return this.http
    .put<Productos>(
      `${this.api}/productos/update`,
      eProducto
    )
  }

  //DELETE
  deleteProducto(idProducto: number){
    return this.http
      .delete<Productos>(
        `${this.api}/productos/delete/${idProducto}`
      )
  }

  
}
