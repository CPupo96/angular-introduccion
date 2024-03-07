import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../service/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})

export class PersonajesComponent {

  //@Input() personajes: Personaje[] = [];

  get personajes(): Personaje[] {
    return this.DbzService.personajes;
  }

  constructor( private DbzService: DbzService ) {}

}
