import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionarCategoriaComponent } from './gestionar-categoria/gestionar-categoria.component';
import { GestionarProductoComponent } from './gestionar-producto/gestionar-producto.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { ListaCategoriaComponent } from './lista-categoria/lista-categoria.component';
import { ProductoCategoriaComponent } from './producto-categoria.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    GestionarCategoriaComponent,
    GestionarProductoComponent,
    ListaProductoComponent,
    ListaCategoriaComponent,
    ProductoCategoriaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductoCategoriaModule { }
