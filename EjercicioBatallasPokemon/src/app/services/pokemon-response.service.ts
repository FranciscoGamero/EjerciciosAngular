import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../model/Pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonResponseService {

  constructor(private http: HttpClient) {}

  getPokemon(pokemonId: number): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon/'+pokemonId+'/');
  }
}
