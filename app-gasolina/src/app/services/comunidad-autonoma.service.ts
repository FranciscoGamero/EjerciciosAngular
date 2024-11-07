import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComunidadAutonoma } from '../models/comunidades-autonomas.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunidadAutonomaService {

  constructor(private http: HttpClient) { }

  getComunidadesAutonomasList(): Observable<ComunidadAutonoma[]> {
    return this.http.get<ComunidadAutonoma[]>('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ComunidadesAutonomas/');
  }
}
