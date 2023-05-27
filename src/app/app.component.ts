import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pokemonName = 'Pikachu';

  onUpdatePokemonName(event: Event) {
    const target = event.target as HTMLInputElement;
    this.pokemonName = target.value;
  }
}
