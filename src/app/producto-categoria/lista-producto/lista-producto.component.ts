import { Component, OnInit } from '@angular/core';
import { Categorias, Productos } from '../models/producto-cat.dto';
import { ProductoCategoriaService } from '../Services/producto-categoria-service.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos?: Productos[];
  categorias?: Categorias[];
  categoriaActual?: number;

  constructor(private pcs:ProductoCategoriaService){ 

  }
  ngOnInit(): void {
    this.getCategorias(); 
  }

  getCategorias(){ 
    this.pcs.getAllCategoria().subscribe((response)=>{
      this.categorias  = response;
    })
  }

  getProductos(category:string) {
    this.categoriaActual = Number(category.substring(0, 1));
    this.pcs.getAllByCat(this.categoriaActual).subscribe((response) => {
      this.productos = response;
      console.log(response); 
    });
  }

  deleteProducto(id: number){
    this.pcs.deleteProducto(id).subscribe(
      (response) => {
        console.log('Producto borrado:', response);
        // Lógica adicional para manejar la respuesta del servidor, si es necesario.
      },
      (error) => {
        console.error('Error al borrar el producto:', error);
        // Lógica adicional para manejar el error, si es necesario.
      }
    )
    
  }

}

//https://media.istockphoto.com/id/1206240534/es/foto/caja-de-cart%C3%B3n-paquete-entrega-cart%C3%B3n-stock-foto-aislada-fondo-blanco.jpg?s=612x612&w=0&k=20&c=Tb04pDbLL17W-8LxvNxSSROBwe5yJtEIeUUXjJIvUuU=
