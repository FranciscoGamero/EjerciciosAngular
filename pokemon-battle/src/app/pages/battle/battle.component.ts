import { Component } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrl: './battle.component.css',
})
export class BattleComponent {
  pokemonTurn = 1;
  pokemonPlayer1Id = 55;
  pokemonPlayer2Id = 24;
  lifePokemon1 = 100;
  lifePokemon2 = 100;
  gameOver = false;

  applyDamage(damage: number) {
    if (this.pokemonTurn === 1) {
      this.lifePokemon2 -= damage;
      if (this.lifePokemon2 <= 0) {
        this.gameOver = true;
      }
      this.pokemonTurn = 2;
    } else {
      this.lifePokemon1 -= damage;
      if (this.lifePokemon1 <= 0) {
        this.gameOver = true;
      }
      this.pokemonTurn = 1;
    }
  }
  resetGame() {
    this.pokemonTurn = 1;
    this.lifePokemon1 = 100;
    this.lifePokemon2 = 100;
    this.gameOver = false;
  }
}
