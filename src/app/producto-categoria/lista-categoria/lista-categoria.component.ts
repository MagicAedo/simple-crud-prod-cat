import { Component } from '@angular/core';
import { ProductoCategoriaService } from '../Services/producto-categoria-service.service';
import { Categorias } from '../models/producto-cat.dto';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent {

  categorias?: Categorias[];

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

}
