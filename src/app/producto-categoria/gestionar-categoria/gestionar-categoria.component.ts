import { Component } from '@angular/core';
import { ProductoCategoriaService } from '../Services/producto-categoria-service.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Categorias, Productos } from '../models/producto-cat.dto';

@Component({
  selector: 'app-gestionar-categoria',
  templateUrl: './gestionar-categoria.component.html',
  styleUrls: ['./gestionar-categoria.component.css']
})
export class GestionarCategoriaComponent {
  form!: UntypedFormGroup;

  constructor(private pcs:ProductoCategoriaService, private formBuiler: UntypedFormBuilder){ 

  }
  ngOnInit(): void {
    this.buildForm();
  }


  buildForm() {
    this.form = this.formBuiler.group({
      id: [null],
      nombreCategoria: ['', Validators.required],
      descripcionCategoria: [''],
    });
  }

  crearCategoria() {
    console.log(this.form.value)

    this.pcs.addCategoria(this.form.value).subscribe(
      (response) => {
        console.log('Categoria agregada:', response);
        // Lógica adicional para manejar la respuesta del servidor, si es necesario.
      },
      (error) => {
        console.error('Error al agregar el categoria:', error);
        // Lógica adicional para manejar el error, si es necesario.
      }
    );}

}
