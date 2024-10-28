import { Component, Input, OnInit } from '@angular/core';
import { PokemonResponseService } from '../../services/pokemon-response.service';
import { PokemonResponse } from '../../model/Pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  @Input() pokemonId!: number; // Usar el operador de aserción no nula
  pokemon: PokemonResponse | undefined;

  constructor(private pokemonService: PokemonResponseService) {}

  ngOnInit(): void {
    this.getPokemon(this.pokemonId);
  }

  getImagenPokemon(pokemonId: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  }

  getPokemon(pokemonId: number): void {
    this.pokemonService.getPokemon(pokemonId).subscribe(resp => this.pokemon = resp);
  }
}