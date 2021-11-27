/**
 * @interface NoteInterface
 * @exports
 * @memberof NoteFormComponent
 */
export interface NoteInterface {
  /**
   * @memberof NoteInterface
   * @property id
   * @type string or number
   */
  id        ?: string | number;
  /**
   * @memberof NoteInterface
   * @property title
   * @type string
   * @required
   */
  title      :  string;
  /**
   * @memberof NoteInterface
   * @property date
   * @type numer or Date
   * @required
   */
  date       : number | Date;
  /**
   * @memberof NoteInterface
   * @property date
   * @type numer or Date
   * @required
   */
  content    : string;
  /**
   * @memberof NoteInterface
   * @property color
   * @type color hexadecimal of note
   * @required
   */
  color      : string;
  /**
   * @memberof NoteInterface
   * @property archive
   * @type defined if this note's archived
   * @optional
   */
  archived  ?: boolean;
}
