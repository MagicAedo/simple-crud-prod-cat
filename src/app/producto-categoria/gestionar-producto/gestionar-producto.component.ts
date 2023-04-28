import { Component } from '@angular/core';
import { Categorias, Productos } from '../models/producto-cat.dto';
import { ProductoCategoriaService } from '../Services/producto-categoria-service.service';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-gestionar-producto',
  templateUrl: './gestionar-producto.component.html',
  styleUrls: ['./gestionar-producto.component.css']
})
export class GestionarProductoComponent {

  form!: UntypedFormGroup;

  categorias?: Categorias[];
  producto?: Productos; 
  categoriaActual?: number;

  constructor(private pcs:ProductoCategoriaService, private formBuiler: UntypedFormBuilder){ 

  }
  ngOnInit(): void {
    this.getCategorias(); 
    this.buildForm();
  }

  getCategorias(){ 
    this.pcs.getAllCategoria().subscribe((response)=>{
      this.categorias  = response;
    })
  }

  buildForm() {
    this.form = this.formBuiler.group({
      id: [null],
      nombreProducto: ['', Validators.required],
      descripcionProducto: [''],
      idCategoria:['',Validators.required],
      stockProducto:['',Validators.required],
      imgReferencia:[''],
      nombreCategoria:[null]
    });
  }

  crearProducto(category:string) {
    this.categoriaActual = Number(category.substring(0, 1));
    this.form.patchValue(
      { 
        idCategoria:this.categoriaActual
      }
    ) 
    console.log(this.form.value)

    this.pcs.addProducto(this.form.value).subscribe(
      (response) => {
        console.log('Producto agregado:', response);
        // Lógica adicional para manejar la respuesta del servidor, si es necesario.
      },
      (error) => {
        console.error('Error al agregar el producto:', error);
        // Lógica adicional para manejar el error, si es necesario.
      }
    );}


}
