import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonModalComponent } from '../pokemon-modal/pokemon-modal.component';
import { Pokemon } from '../../models/lista-pokemon.interface';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit{
  listaPokemon: Pokemon[] = []

  constructor(private modalService: NgbModal, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getListaPokemon().subscribe((respuesta) =>
    this.listaPokemon= respuesta.results)
  }
  // Función para abrir el modal y pasar los datos del Pokémon seleccionado
  openModal(pokemon: any) {
    const modalRef = this.modalService.open(PokemonModalComponent, { size: 'lg' });
    modalRef.componentInstance.name = pokemon.name;
    modalRef.componentInstance.url = pokemon.url;
  }

  // Función para obtener la imagen del Pokémon
  getImagenPokemon(url: string): string {
    const pokemonId = url.split('/')[6];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  }

  // Función para capitalizar el nombre del Pokémon
  capitalizeNombrePokemon(nombre: string): string {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
  }
}
