import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje.interface';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.css'
})
export class ListaPersonajesComponent implements OnInit{
  listadoPersonajes: Personaje[] = [];

  constructor(private servicioPersonaje: PersonajeService){}

  ngOnInit(): void {
    this.servicioPersonaje.getListaPersonajes().subscribe(respuesta => {
      this.listadoPersonajes = respuesta.results;
    })
  }
}
