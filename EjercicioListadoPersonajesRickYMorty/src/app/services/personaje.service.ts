import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicePersonajeResponse } from '../models/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private http: HttpClient) { }

  getListaPersonajes(): Observable<ServicePersonajeResponse> {
    return this.http.get<ServicePersonajeResponse>("https://rickandmortyapi.com/api/character");
  }
}
