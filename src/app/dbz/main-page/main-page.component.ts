import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';

import { DbzService } from '../service/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 8000
  }

  /*agregarNuevoPersonaje( argumento: Personaje ) {
    this.personajes.push( argumento );
  }*/

  constructor() { }

}
