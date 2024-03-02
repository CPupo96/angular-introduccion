import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe() {
    /*const heroeBorrado1 = this.heroes.shift() || '';
    this.heroeBorrado.push(heroeBorrado1);*/
    //this.heroeBorrado.unshift(heroeBorrado1);
    return this.heroeBorrado = this.heroes.shift() || '';
  }
  
}
