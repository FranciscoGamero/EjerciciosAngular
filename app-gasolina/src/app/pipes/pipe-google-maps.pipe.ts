import { Pipe, PipeTransform } from '@angular/core';
import { Gasolinera } from '../models/gasolinera-response.interfaces';

@Pipe({
  name: 'pipeGoogleMaps'
})
export class PipeGoogleMapsPipe implements PipeTransform {

  transform(gasolinera: Gasolinera): string {
    return `https://www.google.com/maps/search/?api=1&query=${gasolinera.latitude},${gasolinera.longitude}`;
  }

}
