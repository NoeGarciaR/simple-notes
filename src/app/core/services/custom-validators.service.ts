import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {
  /**
   * @memberof CustomValidatorsService
   * @method constructor
   * @param { void }
   * @returns { void }
   * */
  constructor() { }
    
  /**
   * @memberof CustomValidatorsService
   * @method notEmail
   * @param control { AbstractControl }
   * @returns { [key: string]: boolean } | null
   * @description Defined if control.value is email
   */
  notEmail(control: AbstractControl): { [key: string]: boolean } | null {
    let regx = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/;
    if ( regx.test(control.value) ) {
      return { 'notEmail': true };
    }
    return null;
}

}
