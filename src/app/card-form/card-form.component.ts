import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../classes/date-form-control';

export interface FieldTypes {
  name: string;
  cardNumber: string;
  expiration: string;
  securityCode: string;
}

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {
  initialValues = {
    name: '',
    cardNumber: '',
    expiration: '',
    securityCode: '',
  };

  cardForm = new FormGroup({
    name: new FormControl<string>(this.initialValues.name, [
      Validators.required,
      Validators.minLength(3),
    ]),
    cardNumber: new FormControl<string>(this.initialValues.cardNumber, [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateFormControl(this.initialValues.expiration, [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl<string>(this.initialValues.securityCode, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  getValues() {
    return {
      name: this.cardForm.value.name ?? '',
      cardNumber: this.cardForm.value.cardNumber ?? '',
      expiration: this.cardForm.value.expiration ?? '',
      securityCode: this.cardForm.value.securityCode ?? '',
    };
  }

  handleSubmit(e: SubmitEvent) {
    console.log('form submitted', e);
  }

  handleReset() {
    this.cardForm.reset(this.initialValues);
  }
}
