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
  /**
   * @memberof AppComponent
   * @type array { NavigationInterface }
   * @name nav
   * @access public
   * @description defined items for navbar { ticle and routes }
   */
  nav: NavigationInterface[] = [
    {
      name    : 'Inicio',
      router  : '/home',
    },
    {
      name    : 'Agregar',
      router  : '/note-form',
    },
    {
      name    : 'Archivo',
      router  : '/archive',
    }
  ]
  /**
   * @memberof AppComponent
   * @type array { string }
   * @name colors
   * @access public
   * @description Defined the colors acepted in item cards
   */
  colors: string[] = [
    "#80ADD0",
    "#0ABDA0",
    "#D4DCA9",
    "#BF9D7A"
  ]
}
