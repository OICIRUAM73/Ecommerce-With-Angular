import { AbstractControl } from '@angular/forms';
export class MyValidators {

  static isPriceValid(control: AbstractControl) {
    const currentValue = control.value;
    if (currentValue > 10000) {
      return {
        price_invalid: true
      };
    }
    return null;
  }
}
