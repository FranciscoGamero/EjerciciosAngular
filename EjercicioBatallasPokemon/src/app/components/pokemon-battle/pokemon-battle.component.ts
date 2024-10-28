
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrls: ['./pokemon-battle.component.css']
})
export class PokemonBattleComponent {
  currentTurn: 'player1' | 'player2' = 'player1';
  currentPokemonName: string = '';
  vidaPlayer1: number = 100;
  vidaPlayer2: number = 100;

  turnoJugador1(): boolean {
    return this.currentTurn === 'player1';
  }

  turnoJugador2(): boolean {
    return this.currentTurn === 'player2';
  }

  cambiarTurno() {
    this.currentTurn = this.currentTurn === 'player1' ? 'player2' : 'player1';
  }

  actualizarNombre(name: string) {
    this.currentPokemonName = name;
  }

  actualizarVidaPlayer1(danio: number) {
    this.vidaPlayer1 -= danio;
    if (this.vidaPlayer1 < 0) {
      this.vidaPlayer1 = 0;
    }
  }

  actualizarVidaPlayer2(danio: number) {
    this.vidaPlayer2 -= danio;
    if (this.vidaPlayer2 < 0) {
      this.vidaPlayer2 = 0;
    }
  }
}