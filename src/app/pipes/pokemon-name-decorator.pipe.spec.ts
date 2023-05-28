import { PokemonNameDecoratorPipe } from './pokemon-name-decorator.pipe';

describe('PokemonNameDecoratorPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonNameDecoratorPipe();
    expect(pipe).toBeTruthy();
  });
});
