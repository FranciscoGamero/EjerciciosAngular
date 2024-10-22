import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaVehiculoResponse, Vehiculo } from '../interfaces/vehiculo-interface';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) {}



    getListaVehiculos(): Observable<ListaVehiculoResponse>{
      return this.http.get<ListaVehiculoResponse>("https://swapi.dev/api/vehicles");
    }
  }
