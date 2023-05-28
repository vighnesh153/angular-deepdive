import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonNameDecorator'
})
export class PokemonNameDecoratorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `🚀 ${value} 🦄`;
  }

}
