import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapRouter'
})
export class MapRouterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
