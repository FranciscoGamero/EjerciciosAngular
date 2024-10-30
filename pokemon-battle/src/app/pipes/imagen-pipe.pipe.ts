import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenPipe'
})
export class ImagenPipe implements PipeTransform {

  transform(idPokemon: number | string): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${idPokemon}.png`
  }

}
