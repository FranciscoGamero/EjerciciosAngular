import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrl: './pokemon-battle.component.css'
})
export class PokemonBattleComponent implements OnInit {
  
  @Input() pokemon1: any;
  @Input() pokemon2: any;
  @Output() battleResult = new EventEmitter<string>();

  ngOnInit(): void {
    // Implementa la lógica de inicialización aquí
  }

  startBattle(): void {
    // Implementa la lógica de la batalla aquí
    const result = Math.random() > 0.5 ? 'Pokemon 1 wins!' : 'Pokemon 2 wins!';
    this.battleResult.emit(result);
  }
}