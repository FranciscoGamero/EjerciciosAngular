import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra-progreso',
  templateUrl: './barra-progreso.component.html',
  styleUrl: './barra-progreso.component.css'
})
export class BarraProgresoComponent {
  @Input() color = 'success';
  @Input() progreso = 5;

  cambiarColor(colorElegido: string) {
    this.color = colorElegido;
  }
  cambiarNumero(numero: number) {
    this.progreso = numero;
  }
  
  cambiarprogreso(event: any) {
    var nuevoprogreso = event.target.value;
    this.progreso = nuevoprogreso;
  }
}
