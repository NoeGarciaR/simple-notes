import { Component, Input, OnInit } from '@angular/core';
import { NavigationInterface } from '../interfaces/navigation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() title = 'NavBar';
  @Input() itemsNavigate: NavigationInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
