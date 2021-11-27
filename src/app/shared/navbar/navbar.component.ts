import { Component, Input, OnInit } from '@angular/core';
import { faPlusCircle, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddItemModalComponent } from 'src/app/components/add-item-modal/add-item-modal.component';
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
  /**
   * @memberof NavbarComponent
   * @param colors
   * @default []
   * @name colors
   * @type string { array }
   * @access public
   */
  iconAdd = faPlusCircle;
  faSticky = faStickyNote;

  public isCollapsed = true;

  constructor(private modalService: NgbModal) { 
    
  }

  ngOnInit(): void {
  }

  open(color: string) {
    const modalRef = this.modalService.open(AddItemModalComponent);
    modalRef.componentInstance.color = color;
  }

}
