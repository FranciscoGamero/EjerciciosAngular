import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonResponseService } from '../../services/pokemon-response.service';
import { PokemonResponse } from '../../model/Pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemonId!: number;
  @Input() turnoPokemon: boolean = false;
  @Output() turnoCambiado = new EventEmitter<void>();
  @Output() nombrePokemon = new EventEmitter<string>();
  @Output() vidaCambiada = new EventEmitter<number>();
  pokemon: PokemonResponse | undefined;
  vida: number = 100;

  constructor(private pokemonService: PokemonResponseService) {}

  ngOnInit(): void {
    this.getPokemon(this.pokemonId);
  }

  getImagenPokemon(pokemonId: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  }

  getPokemon(pokemonId: number): void {
    this.pokemonService.getPokemon(pokemonId).subscribe(resp => {
      this.pokemon = resp;
      if (this.turnoPokemon) {
        this.nombrePokemon.emit(this.pokemon.name);
      }
    });
  }

  startBattle() {
    this.turnoPokemon = !this.turnoPokemon;
    this.turnoCambiado.emit();
    if (this.pokemon) {
      this.nombrePokemon.emit(this.pokemon.name);
    }
    this.reducirVidaOponente();
  }

  reducirVidaOponente() {
    const damage = Math.floor(Math.random() * 101);
    this.vida -= damage;
    if (this.vida < 0) {
      this.vida = 0;
    }
    this.vidaCambiada.emit(this.vida);
  }
}