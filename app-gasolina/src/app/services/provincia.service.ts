import { Injectable } from '@angular/core';
import { Provincia } from '../models/provincias.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http: HttpClient) { }

  getProvinciaList(IDCCAA: string): Observable<Provincia[]> {
    console.log(IDCCAA)
    return this.http.get<Provincia[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ProvinciasPorComunidad/${IDCCAA}`);
  }
}
