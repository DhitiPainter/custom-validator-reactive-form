import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable()
export class ValidatorService{
  constructor() { } 

  static checkPasswordMatch(pass: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const isPasswordMatch = pass === control.value ? true : false;
      return !isPasswordMatch ? {'passMatch': 'Passwords do not match'} : null;
    };
  }
}