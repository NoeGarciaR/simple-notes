import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { NoteInterface } from 'src/app/shared/interfaces/note';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  /**
   * @memberof NoteFormComponent
   * @name color
   * @type Input() { string }
   * @default #0ABDA0
   * @description get color card
   */
  @Input() color:string = "#0ABDA0";
  /**
   * @memberof NoteFormComponent
   * @name date
   * @type { string }
   * @default now
   * @description determine create cards date
   */
  date = new Date();
  /**
   * @memberof NoteFormComponent
   * @name saveIcon
   * @type { const }
   * @default faSave
   * @description get icon save
   */
  saveIcon = faSave;
  /**
   * @memberof NoteFormComponent
   * @name form
   * @type { FormGroup }
   * @default faSave
   * @description control form
   */
  form: FormGroup = new FormGroup({});
  /**
   * @method constructor
   * @param fb { FormBuilder }
   * @returns { void }
   */
  constructor( private fb: FormBuilder ) { }
  /**
   * @method ngOnInit
   * @param { void }
   * @returns { void }
   * @description create formGroup
   */
  ngOnInit(): void {
    this.createForm();
  }
  /**
   * @method createForm
   * @param { void }
   * @returns { void }
   * @description create new form with formBuilder
   */
  createForm(): void {
    this.form = this.fb.group({
      title   : ['', Validators.required],
      content : ['', Validators.required],
    });
    /**
     * @type { Observable }
     * @description subscribe to form
     * transform toUpperCase { title, content }
     */
    this.form.valueChanges.subscribe( item => {
      this.form.patchValue({
        title: item.title.toUpperCase(),
        content: item.content.toUpperCase(),
      }, { emitEvent: false });
    })
  }
  /**
   * @method save
   * @param { void }
   * @returns { void }
   * @description Emits the object built with the data
   */
  save(): void {
    // console.log(this.form.valid);
    console.log(this.constructObject());
  }
  /**
   * @method constructObject
   * @param { void }
   * @returns { NoteInterface }
   * @description Object build with data form
   */
  constructObject(): NoteInterface {
    let _response: any = {};
    Object.keys( this.form.controls ).forEach( key => {
      _response[`${key}`] =  this.form.get(key)?.value;
    } );
    _response['date'] = this.date.getTime();
    _response['color'] = this.color;
    return _response as NoteInterface;
  }

}
