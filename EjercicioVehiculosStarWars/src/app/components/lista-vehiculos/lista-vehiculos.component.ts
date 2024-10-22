import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../interfaces/vehiculo-interface';
import { VehiculoService } from '../../services/vehiculo.service';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrl: './lista-vehiculos.component.css'
})
export class ListaVehiculosComponent implements OnInit{
  listadoVehiculos: Vehiculo [] = [];
  
  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
    this.vehiculoService.getListaVehiculos().subscribe((respuesta) => {
      this.listadoVehiculos = respuesta.results;
    })
  }

}
