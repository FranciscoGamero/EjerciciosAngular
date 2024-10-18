import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra-progreso-2',
  templateUrl: './barra-progreso-2.component.html',
  styleUrl: './barra-progreso-2.component.css'
})
export class BarraProgreso2Component {

  @Input() progreso = 5
  @Input() color = '';

  getProgresoColor(){
    if (this.progreso <25){
      return "danger";
    } else if(this.progreso >= 25 && this.progreso <=50){
      return "warning";
    } else if (this.progreso > 50 && this.progreso <=75){
      return "primary";
    } else if (this.progreso > 75){
      return "success";
    }
    return "";
  }
}
