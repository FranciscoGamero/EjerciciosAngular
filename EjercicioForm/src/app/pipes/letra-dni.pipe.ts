import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letraDNI'
})
export class LetraDNIPipe implements PipeTransform {

  transform(numeroDNI: string): string {
    let cadenaDNI = 'TRWAGMYFPDXBNJZSQVHLCKET';
    let numero = parseInt(numeroDNI) % 23;
    let letra = cadenaDNI.substring(numero, numero + 1);
    if(numeroDNI.length == 0){
      return '';
    } else {
      return letra;
    }
  }

}
