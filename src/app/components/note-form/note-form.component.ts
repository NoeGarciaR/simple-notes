import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {

  @Input() color:string = "#0ABDA0";

  constructor() { }

  ngOnInit(): void {
  }

}
