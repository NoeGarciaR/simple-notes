/**
 * @interface NoteInterface
 * @exports
 * @memberof NoteFormComponent
 */
export interface NoteInterface {
  /**
   * @memberof NoteInterface
   * @property title
   * @type string
   * @required
   */
  title   :  string;
  /**
   * @memberof NoteInterface
   * @property date
   * @type numer or Date
   * @required
   */
  date    : number | Date;
  /**
   * @memberof NoteInterface
   * @property date
   * @type numer or Date
   * @required
   */
  content : string;
}
