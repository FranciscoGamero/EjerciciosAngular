import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra-progreso',
  templateUrl: './barra-progreso.component.html',
  styleUrl: './barra-progreso.component.css'
})
export class BarraProgresoComponent {
  @Input() color = 'success';
  @Input() valor = 5;

  cambiarColor(colorElegido: string) {
    this.color = colorElegido;
  }
  cambiarNumero(numero: number) {
    this.valor = numero;
  }
  
  cambiarValor(event: any) {
    var nuevoValor = event.target.value;
    this.valor = nuevoValor;
  }
}
