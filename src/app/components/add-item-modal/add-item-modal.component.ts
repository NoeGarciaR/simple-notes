import { Component, Input, OnInit } from '@angular/core';
/**
 * Boostrap Modal Service
 */
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent implements OnInit {
  @Input() color: string = 'Sin Color';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
