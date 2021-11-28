import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faFileExport, faFileImport, faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CustomValidatorsService } from 'src/app/core/services/custom-validators.service';
import { NoteInterface } from 'src/app/shared/interfaces/note';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  /**
   * @memberof NoteFormComponent
   * @name objectResponse
   * @type Output() { EventEmitter<NoteInterface> }
   * @default new EventEmitter<NoteInterface>
   * @description Emit the object generate of type NoteInterface
   */
  @Output() objectResponse = new EventEmitter<NoteInterface>();
  /**
   * @memberof NoteFormComponent
   * @name archived
   * @type Output() { EventEmitter<NoteInterface> }
   * @default new EventEmitter<NoteInterface>
   * @description Emit the object generate of type NoteInterface
   * Use in case of click in button archive
   */
  @Output() archive = new EventEmitter<NoteInterface>();
  /**
   * @memberof NoteFormComponent
   * @name archived
   * @type Output() { EventEmitter<NoteInterface> }
   * @default new EventEmitter<NoteInterface>
   * @description Emit the object generate of type NoteInterface
   * Use in case of click in button Unarchive
   */
  @Output() unarchive = new EventEmitter<NoteInterface>();
  /**
   * @memberof NoteFormComponent
   * @name delete
   * @type Output() { EventEmitter<NoteInterface> }
   * @default new EventEmitter<NoteInterface>
   * @description Emit the object generate of type NoteInterface
   * Use in case of click in button delete
   */
  @Output() delete = new EventEmitter<NoteInterface>();
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
   * @name note
   * @type Input() { NoteInterface }
   * @default undefined
   * @description
   * Comunication in this component form, 
   * It is used to preload the form
   * and determine how the resulting object is constructed
   */
  @Input() note: NoteInterface | undefined;
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
   * @name upArchiveIcon
   * @type { const }
   * @default faFileImport
   * @description get icon upArchiveIcon
   */
  upArchiveIcon = faFileImport;
  /**
   * @memberof NoteFormComponent
   * @name trashIcon
   * @type { const }
   * @default faTrashAlt
   * @description get icon trashIcon
   */
  trashIcon = faTrashAlt;
  /**
   * @memberof NoteFormComponent
   * @name downArchiveIcon
   * @type { const }
   * @default faFileExport
   * @description get icon downArchiveIcon
   */
  downArchiveIcon = faFileExport;
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
   * @param fb { FormBuilder }, customValidators { CustomValidatorsService }
   * @returns { void }
   */
  constructor( private fb: FormBuilder,
               private customValidators: CustomValidatorsService
     ) { }
  /**
   * @method ngOnInit
   * @param { void }
   * @returns { void }
   * @description create formGroup
   */
  ngOnInit(): void {
    this.createForm();
    if ( this.note !== undefined ) {
      this.color = this.note.color;
      this.date = new Date(this.note.date);
    }
  }
  /**
   * @method createForm
   * @param { void }
   * @returns { void }
   * @description create new form with formBuilder and initialice if exist note
   */
  createForm(): void {
    this.form = this.fb.group({
      title   : [ (this.note === undefined)? '' : this.note.title , [Validators.required, Validators.minLength(3), this.customValidators.notEmail]],
      content : [ (this.note === undefined)? '' : this.note.content , [Validators.required, Validators.minLength(5)]],
    });
    /**
     * @type { Observable }
     * @description subscribe to form
     * transform toUpperCase { title, content }
     */
    this.form.valueChanges.subscribe( item => {
      this.form.patchValue({
        title: item.title.toUpperCase().trimStart(),
        content: item.content.toUpperCase().trimStart(),
      }, { emitEvent: false });
    })
  }

  /**
   * @method save
   * @param { void }
   * @returns { void }
   * @description Emits the object built with the data
   * if form is invalid then mark touch controls { inputs }
   * else emit object build
   * @emits NoteInterface
   */
  save(): void {
    if ( this.formValidate() ) {
      this.objectResponse.emit(this.constructObject());
    }
  }
  /**
   * @method archived
   * @param { void }
   * @returns { void }
   * @description Emits the object built with the data
   * this method update archived in true
   * @emits NoteInterface
   */
  archived(): void {
    if ( this.formValidate() ) {
      let objetc = this.constructObject();
      objetc.archived = true;
      this.archive.emit(objetc);
    }
  }
  /**
   * @method unArchived
   * @param { void }
   * @returns { void }
   * @description Emits the object built with the data
   * this method update archived in false
   * @emits NoteInterface
   */
  unArchived(): void {
    if ( this.formValidate() ) {
      let objetc = this.constructObject();
      objetc.archived = false;
      this.unarchive.emit(objetc);
    }
  }
  /**
   * @method unArchived
   * @param { void }
   * @returns { void }
   * @description Emits the object built with the data
   * this method update archived in false
   * @emits NoteInterface
   */
  deleteNote(): void {
    this.delete.emit(this.constructObject());
  }
  /**
   * @method formValidate
   * @param { void }
   * @returns { void }
   * @description 
   * Mark touch items and return if this form's valid
   */
  formValidate(): boolean {
    if (this.form.invalid) {
      Object.values( this.form.controls ).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values( control.controls ).forEach( con => con.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
      return false;
    } else {
      return true;
    }
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
    if ( this.note === undefined ) {
      _response['archived'] = false;
    } else {
      _response['archived'] = this.note['archived'];
      _response['id'] = this.note['id'];
    }
    return _response as NoteInterface;
  }
  /**
   * @get
   * @method titleInvalid
   * @param { void }
   * @returns { boolean }
   * @description Validate if input title is touched and valid
   */
  get titleInvalid(): boolean | undefined {
    return this.form.get('title')?.invalid && this.form.get('title')?.touched;
  }
  /**
   * @get
   * @method contentInvalid
   * @param { void }
   * @returns { boolean }
   * @description Validate if input content is touched and valid
   */
  get contentInvalid(): boolean | undefined{
    return this.form.get('content')?.invalid && this.form.get('content')?.touched;
  }

}
