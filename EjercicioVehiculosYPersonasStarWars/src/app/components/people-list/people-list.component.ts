import { Component, OnInit} from '@angular/core';
import { People } from '../../models/people-list.interface';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent implements OnInit{
  listaPersonas:  People[] = [];

  constructor(private peopleService: PeopleService){}

  ngOnInit(): void {
    this.peopleService.getPeopleList().subscribe((respuesta) => {
      this.listaPersonas = respuesta.results;
    })
  }

}
