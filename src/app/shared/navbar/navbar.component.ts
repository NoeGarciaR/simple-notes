import { Component, Input, OnInit } from '@angular/core';
import { faPlusCircle, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { NavigationInterface } from '../interfaces/navigation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  /**
   * @memberof NavbarComponent
   * @param title
   * @default NavBar
   * @name title
   * @type Input() { string }
   * @access public
   */
  @Input() title = 'NavBar';
  /**
   * @memberof NavbarComponent
   * @param title
   * @default []
   * @name itemsNavigate
   * @type NavigationInterface { array }
   * @access public
   */
  @Input() itemsNavigate: NavigationInterface[] = [];
  /**
   * @memberof NavbarComponent
   * @param colors
   * @default []
   * @name colors
   * @type string { array }
   * @access public
   */
  @Input() colors: string[] = [];

  iconAdd = faPlusCircle;
  faSticky = faStickyNote;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
