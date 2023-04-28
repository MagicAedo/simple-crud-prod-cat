import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarCategoriaComponent } from './producto-categoria/gestionar-categoria/gestionar-categoria.component';
import { ListaCategoriaComponent } from './producto-categoria/lista-categoria/lista-categoria.component';
import { ListaProductoComponent } from './producto-categoria/lista-producto/lista-producto.component';
import { GestionarProductoComponent } from './producto-categoria/gestionar-producto/gestionar-producto.component';

const routes: Routes = [
  {
    path:'',
    component: ListaProductoComponent,
    pathMatch:'full'
  },
  {
    path:'ver-categoria',
    component:ListaCategoriaComponent
  },
  {
    path:'crear-categoria',
    component: GestionarCategoriaComponent
  },
  {
    path:'productos',
    component: ListaProductoComponent
  },
  {
    path:'crear-producto',
    component:GestionarProductoComponent
  },
  {
    path:'**',
    redirectTo:''
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
