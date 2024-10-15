import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  mostrar = '0';
  
  entrada(value: string) {
    if (this.mostrar === '0') {
      this.mostrar = value;
    } else {
      this.mostrar += value;
    }
  }
  calcular() {
    this.mostrar = eval(this.mostrar);
  }
  limpiar(){
    this.mostrar = '0';
  }
}
