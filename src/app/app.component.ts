import { Component } from '@angular/core';
import { NavigationInterface } from './shared/interfaces/navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * @memberof AppComponent
   * @type string
   * @name title
   * @access public
   * @description name of page
   */
  title = 'SimpleNotes';

  nav: NavigationInterface[] = [
    {
      name    : 'Inicio',
      router  : '/home',
    },
    {
      name    : 'Agregar',
      router  : '/add',
    },
    {
      name    : 'Archivo',
      router  : '/archive',
    }
  ]
}
