import { Component, Input, OnInit } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  date = new Date();

  saveIcon = faSave;

  @Input() color:string = "#0ABDA0";

  constructor() { }

  ngOnInit(): void {
  }

}
