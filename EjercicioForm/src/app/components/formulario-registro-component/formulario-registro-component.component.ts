import { Component } from '@angular/core';
import { UsuarioDto } from '../../models/usuario.dto';

@Component({
  selector: 'app-formulario-registro-component',
  templateUrl: './formulario-registro-component.component.html',
  styleUrl: './formulario-registro-component.component.css'
})
export class FormularioRegistroComponent {

  usuario = new UsuarioDto('', '', '', '', '', '', '', '');
  enviado = false;
  confirmarContrasenia: string = '';
  mostrarErrores: boolean = false;

  constructor() {}

addUsuario() {
    if (this.todosCamposCompletos() && this.verificarContrasenia()) {
      console.log('Usuario registrado:', this.usuario);
      this.enviado = true;
    }
  }
  letraDNI(numeroDNI: string) {
    let cadenaDNI = 'TRWAGMYFPDXBNJZSQVHLCKET';
    let numero = parseInt(numeroDNI) % 23;
    let letra = cadenaDNI.substring(numero, numero + 1);
    return letra;
  }
  verificarContrasenia(): boolean {
    return this.usuario.contrasenia.localeCompare(this.confirmarContrasenia) === 0;
  }
  todosCamposCompletos(): boolean {
    return this.usuario.nombre !== '' &&
           this.usuario.apellidos !== '' &&
           this.usuario.NIF !== '' &&
           this.usuario.contrasenia !== '' &&
           this.confirmarContrasenia !== '' &&
            this.usuario.email !== '' &&
            this.usuario.telefono !== '' &&
            this.usuario.sexo !== '' &&
            this.usuario.conocimientoPagina !== '' &&
            this.usuario.terminos === true;

  }
  validarFormulario() {
    if(this.todosCamposCompletos() && this.verificarContrasenia()) {
      this.mostrarErrores = false;
    } else {
      this.mostrarErrores = true;
    }
  }
}
