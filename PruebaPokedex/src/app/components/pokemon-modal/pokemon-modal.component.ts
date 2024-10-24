import { Component, Inject, inject, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetallePokemon } from '../../models/pokemon.interface';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrl: './pokemon-modal.component.css'
})
export class PokemonModalComponent {
  @Input() pokemon: DetallePokemon | null = null;
}
